module contactModule.modules {
    "use strict";
    export interface IContactData {
        Id:         number;
        partyId:    number;
        Name:       string;
    }

    export class ContactData implements IContactData {
        constructor(
            public Id: number,
            public partyId: number,
            public Name: string,
        )
        {

        }
    }
}