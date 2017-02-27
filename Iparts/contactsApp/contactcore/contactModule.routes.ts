((): void =>{

"use strict";

angular.module(contactModule.AngularGlobals.contactModule).config(config);

config.$inject = [app.core.AngularGlobals.$STATEPROVIDER, app.core.AngularGlobals.appCoreConstants,  "$urlRouterProvider"]

function config($stateProvider: ng.ui.IStateProvider, constants: app.core.IConstants, $urlRouterProvider): void{

    var baseUrl = constants.baseUrl;
    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state("listcontacts", {
        url: "/",
        templateUrl: baseUrl + "Areas/coludIpart/iparts/contactsApp/templates/contactlist.html",
        controller: contactModule.ContactListCtrl.id,
        controllerAs: "vm",

    }); 
}


})();