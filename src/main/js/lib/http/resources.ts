import { ResourceListPage } from "./resource.list.page";

export interface Resources {
    _embedded: any;
    _links: any;
    page: ResourceListPage;
}