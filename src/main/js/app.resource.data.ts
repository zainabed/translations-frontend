import { Injectable } from "@angular/core";

@Injectable()
export class AppResourceData {
    private _resource;

    get resource() {
        return this._resource;
    }

    set resource(resource) {
        this._resource = resource;
    }

    getResourceListUrlFor(resourceName) {
        return this.filterHrefUrl(this.resource["_links"][resourceName]["href"]);
    }

    getResourceSelfUrl(resouce) {
        return resouce["_links"]["self"]["href"];
    }

    getResourceId(resouce) {
        return this.filterId(this.getResourceSelfUrl(resouce));
    }

    filterId(href) {
        return href.substring(href.lastIndexOf("/") + 1);
    }
    filterHrefUrl(href) {
        return href.substring(0, href.indexOf("{"));
    }
}