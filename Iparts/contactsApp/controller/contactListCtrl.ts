module contactModule {
    export interface IContactListCtrl {
     getdata(): void;

    }

export class ContactListCtrl implements IContactListCtrl {
    public static id: string = AngularGlobals.contactModule + ".ContactListCtrl";
    party: modules.IContactData;
    contacts:any[]
    static $inject = ["contactModule.services.ContactModuleService"];

    constructor(public service: services.IContactModuleService ){

        this.getdata();

}

    getdata(): void {
        let result = this.service.getParty(); {
            result.then((response: any): void => {
                  let anyParties = <any>[];
                    anyParties = response.data.Items;
                    this.contacts = anyParties;
            });
        }
    }

}
angular.module(contactModule.AngularGlobals.contactModule).controller(ContactListCtrl.id, ContactListCtrl);

};
