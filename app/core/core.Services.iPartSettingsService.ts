module app.core {
    'use strict';

    export interface IIPartSettingsService {
        getSettings(contentKey: string, contentItemKey: string): ng.IHttpPromise<TemplateStringsArray>;
    }

// ReSharper disable once InconsistentNaming
    export class IPartSettingsService {
        public static id: string = AngularGlobals.appCore + ".IPartSettingsService";
        baseUrl: string;
        authToken: string;

        constructor(
            private $http: ng.IHttpService,
            clientContext: core.IConstants) {

            this.baseUrl = clientContext.baseUrl;
            this.authToken = clientContext.authToken;
        }

        //Get the published iPart settings for the given contentItem (iPart) on the content.
        public getSettings(contentKey: string, contentItemKey: string): ng.IHttpPromiseCallbackArg<TemplateStringsArray> {
            return this.$http.get(this.baseUrl + "api/ContentTypeSettings",
            {
                params: { contentKey: contentKey, contentItemKey: contentItemKey },
                headers: { 'RequestVerificationToken': this.authToken }
                }).then((response: ng.IHttpPromiseCallbackArg<TemplateStringsArray>): TemplateStringsArray => {
                    if (response.data)
                        return response.data;
                    return response.data;
            });
        }

        public static injection(): any[] {
            return [core.AngularGlobals.$HTTP, core.AngularGlobals.appCoreConstants,
                (h, c) => new IPartSettingsService(h, c)];
        }

    }

    // register service with main module
    angular
        .module(AngularGlobals.appCore)
        .factory(IPartSettingsService.id, IPartSettingsService.injection());
} 