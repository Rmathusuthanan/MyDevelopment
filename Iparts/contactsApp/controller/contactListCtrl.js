var contactModule;
(function (contactModule) {
    var ContactListCtrl = (function () {
        function ContactListCtrl(service, $scope) {
            this.service = service;
        }
        ContactListCtrl.prototype.getParty = function () {
            var _this = this;
            var result = this.service.getParty();
            {
                result.then(function (response) {
                    _this.party = response.data;
                });
            }
        };
        return ContactListCtrl;
    }());
    ContactListCtrl.id = contactModule.AngularGlobals.contactModule + ".ContactListCtrl";
    ContactListCtrl.$inject = [contactModule.services.ContactModuleService.id, "$scope"];
    contactModule.ContactListCtrl = ContactListCtrl;
    angular.module(contactModule.AngularGlobals.contactModule).controller(ContactListCtrl.id, ContactListCtrl);
})(contactModule || (contactModule = {}));
;
