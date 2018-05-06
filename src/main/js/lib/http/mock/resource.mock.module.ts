import { NgModule } from "@angular/core";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { ResourceMockData } from "./resource.mock.data";

@NgModule({
    imports: [HttpClientTestingModule],
    providers: [ResourceMockData]
})
export class ResourceMockModule {

}