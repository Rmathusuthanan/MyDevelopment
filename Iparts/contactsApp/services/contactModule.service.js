var contactModule;
(function (contactModule) {
    var services;
    (function (services) {
        "use strict";
        var ContactModuleService = (function () {
            function ContactModuleService($http, clientContest) {
                this.$http = $http;
            }
            ContactModuleService.prototype.getParty = function () {
                return this.$http.get(this.baseUrl + "/api/party")
                    .then(function (response) {
                    return response;
                });
            };
            ContactModuleService.injection = function () {
                return [app.core.AngularGlobals.$HTTP, app.core.AngularGlobals.appCoreConstants,
                    function (h, c) { return new ContactModuleService(h, c); }];
            };
            return ContactModuleService;
        }());
        ContactModuleService.id = contactModule.AngularGlobals.contactModuleServices + ".ContactModuleService";
        services.ContactModuleService = ContactModuleService;
        angular.module(contactModule.AngularGlobals.contactModule)
            .factory(ContactModuleService.id, ContactModuleService.injection());
    })(services = contactModule.services || (contactModule.services = {}));
})(contactModule || (contactModule = {}));
