import { HttpClient } from "@angular/common/http";
import { Response, ResponseOptions } from "@angular/http";
import { HttpResponse } from "@angular/common/http";

import { Observable } from "rxjs/Observable";


export class HttpResource<T>{

    protected endPoint: string;
    protected path: string;
    protected apiEndPoint: string;

    _embedded;
    private _links;
    private _page;
    private _list;

    constructor(protected http: HttpClient, path: string, endPoint: string) {
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


    /**
     * HTTP GET method to fetch Users from API end point.
     * Response type is HAL which represents response body in three parts.
     * Links, Embedded and Page objects.
     */
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

    /**
     * HTTP GET method to fetch single User object from API end point.
     * @param id 
     */
    getOne(id): Observable<T> {
        return this.http.get<T>(`${this.apiEndPoint}/${id}`);
    }

    /**
     * HTTP POST method to submit User object.
     * 201 status is returned when new object is created via this API call.
     * @param model 
     */
    save(model: T): Observable<HttpResponse<T>> {
        return this.http.post<T>(this.apiEndPoint, model, { observe: 'response' });
    }

    /**
     * HTTP PATCH method will update only part of model object which is being 
     * updated.
     * 204 status responseis returned on successfull API call.
     * @param model 
     */
    update(model: T): Observable<HttpResponse<T>> {
        return this.http.patch<T>(this.apiEndPoint, model, { observe: 'response' });
    }

    /**
     * HTTP DELETE method will delete model object via API call.
     * 204 status responseis returned on successfull API call.
     * @param model 
     */
    delete(id): Observable<HttpResponse<T>> {
        return this.http.delete<T>(`${this.apiEndPoint}/${id}`, { observe: 'response' });
    }
}