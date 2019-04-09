import { Injectable } from "@angular/core";

@Injectable()
export class AppResourceData {
    private _resource = null;
    storage = window.localStorage;

    get resource() {
        if (this._resource == null) {
            this._resource = JSON.parse(this.storage.getItem("resource"));
        }
        return this._resource;
    }

    set resource(resource) {
        if(typeof resource !== "undefined") {
            this.storage.setItem("resource", JSON.stringify(resource));
        }
        this._resource = resource; 
    }

    reset(){
        this._resource = null;
        this.storage.removeItem("resource");
    }

    getResourceListUrlFor(resource, resourceName) {
        let href = resource["_links"][resourceName]["href"];
        if (href.indexOf("{") > 0) {
            return this.filterHrefUrl(href);
        }
        return href;
    }

    getResourceSelfUrl(resouce) {
        return this.filterHrefUrl(resouce["_links"]["self"]["href"]);
    }

    getResourceId(resouce) {
        return this.filterId(this.getResourceSelfUrl(resouce));
    }

    filterId(href) {
        return href.substring(href.lastIndexOf("/") + 1);
    }


    filterHrefUrl(href) {
        let position = href.indexOf("{");
        if (position > 0) {
            return href.substring(0, position);
        }
        return href;
    }

    getId(model): string {
        let href = model['_links']['self']['href'];
        let lastIndex = href.lastIndexOf("/") + 1;
        return href.substr(lastIndex);
    }
}