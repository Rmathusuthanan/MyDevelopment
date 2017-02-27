var contactModule;
(function (contactModule) {
    var AngularGlobals = (function () {
        function AngularGlobals() {
        }
        return AngularGlobals;
    }());
    AngularGlobals.contactModule = "contactModule";
    AngularGlobals.contactModuleServices = "contactModule.services";
    AngularGlobals.contacts = "contact";
    contactModule.AngularGlobals = AngularGlobals;
})(contactModule || (contactModule = {}));
