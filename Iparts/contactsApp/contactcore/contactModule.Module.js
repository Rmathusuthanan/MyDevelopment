(function () {
    "use strict";
    angular.module(contactModule.AngularGlobals.contactModule, []);
    angular.module("app").requires.push(contactModule.AngularGlobals.contactModule);
})();
