/// <reference path="../../../app/core/core.angularGlobals.ts" />
/// <reference path="../../../app/core/core.constants.ts" />


module contactModule.services {
    "use strict";

    export interface IContactModuleService {
        getParty(): ng.IPromise<modules.IContactData>;
    }
    export class ContactModuleService implements IContactModuleService {
        public static id: string = AngularGlobals.contactModuleServices + ".ContactModuleService";
       public baseUrl: string;
       public authToken: string;
        constructor(private $http: ng.IHttpService,
        clientContext: app.core.IConstants)
        {
            this.baseUrl = clientContext.baseUrl
            this.authToken = clientContext.authToken;
        }

       getParty(): ng.IPromise<modules.IContactData>{
            return this.$http.get(this.baseUrl + "/api/party")

            .then((response: any): any => {
                return response;

            })
           ;
        };

       public static injection(): any[] {
            return [app.core.AngularGlobals.$HTTP, app.core.AngularGlobals.appCoreConstants,
            (h, c)=> new ContactModuleService(h, c)];
        }
    }

    angular.module(contactModule.AngularGlobals.contactModule)
    .factory(ContactModuleService.id, ContactModuleService.injection());
}