import { HttpClient } from "@angular/common/http";
import { Response, ResponseOptions } from "@angular/http";

import { Observable } from "rxjs/observable";


export class HttpResource<T>{

    protected endPoint: string;
    protected path: string;
    protected apiEndPoint: string;

    _embedded;
    private _links;
    private _page;
    private _list;

    constructor(private http: HttpClient, path: string, endPoint: string) {
        this.path = path;
        this.endPoint = endPoint;
        this.apiEndPoint = this.endPoint + this.path;
    }

    get list() {
        return this._list as T[];
    }

    get page() {
        return this._page;
    }

    get links() {
        return this._links;
    }


    get(): Observable<HttpResource<T>> {
        return this.http.get(this.apiEndPoint)
            .map((response: Response) => response)
            .map((data) => {
                this._list = data["_embedded"][this.path];
                this._links = data["_links"];
                this._page = data["page"];
                return this;
            });
    }

}