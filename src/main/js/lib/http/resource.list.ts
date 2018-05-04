import { ResourceListPage } from "./resource.list.page";

export interface ResourceList {
    _embedded: any;
    _links: any;
    page: ResourceListPage;
}