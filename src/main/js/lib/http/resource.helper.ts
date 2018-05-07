/**
 * 
 */
export class ResourceHelper {

    static getResourceListUrlFor(resource, resourceName) {
        return this.filterHrefUrl(resource["_links"][resourceName]["href"]);
    }

    static getResourceSelfUrl(resouce) {
        return resouce["_links"]["self"];
    }

    static filterHrefUrl(href) {
        return href.substring(0, href.indexOf("{"));
    }
}