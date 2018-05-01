import { HttpClient } from "@angular/common/http";
import { Response, ResponseOptions } from "@angular/http";

export class HttpResource<T> extends Response{

    protected _path;
    protected _apiUrl;
    protected _endPoint;

    _embedded;
    private _links;
    private _page;
    private _list;
    
    constructor(private http: HttpClient) {
        super(new ResponseOptions());
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
    

    set path(path) {
        this._path = path;
    }

    set apiUrl(apiUrl) {
        this._apiUrl = apiUrl;
    }
    set endPoint(endPoint) {
        this._endPoint = endPoint;
    }

    get() {
        return this.http.get<HttpResource<T>>(this.endPoint)
            .map((response: Response) => {
                this._list = response["_embedded"][this.path];
                this._links = response["_links"];
                this._page = response["page"];
                return this;
            })
            .map((data) => this);

    }
}