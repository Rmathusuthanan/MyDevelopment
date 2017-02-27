var contactModule;
(function (contactModule) {
    var modules;
    (function (modules) {
        "use strict";
        var ContactData = (function () {
            function ContactData(Id, partyId, Name) {
                this.Id = Id;
                this.partyId = partyId;
                this.Name = Name;
            }
            return ContactData;
        }());
        modules.ContactData = ContactData;
        var PagedResult = (function () {
            function PagedResult(Count, HasNext, Items, Limit, NextOffset, Offset, TotalCount) {
                this.Count = Count;
                this.HasNext = HasNext;
                this.Items = Items;
                this.Limit = Limit;
                this.NextOffset = NextOffset;
                this.Offset = Offset;
                this.TotalCount = TotalCount;
            }
            return PagedResult;
        }());
        modules.PagedResult = PagedResult;
    })(modules = contactModule.modules || (contactModule.modules = {}));
})(contactModule || (contactModule = {}));
