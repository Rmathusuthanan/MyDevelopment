"use strict"
declare module contactModule.Routes {
    interface IContactModuleStateParams extends ng.ui.IStateParamsService {
        partyId: number;
    }
}