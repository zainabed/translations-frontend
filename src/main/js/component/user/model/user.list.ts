import {User} from "./user";

export class UserList {
    _embedded;
    private _links;
    private _page;
    private _list;
    
    constructor(data: Object){
        this._list = data["_embedded"]["users"] as User[];
        this._links = data["_links"];
        this._page = data["page"];
    }

    get list(){
        return this._list;
    }

    get page(){
        return this._page;
    }

    get links() {
        return this._links;
    }
    
}