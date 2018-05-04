import { TestBed } from "@angular/core/testing";
import { ResourceMockModule } from "./mock/resource.mock.module";
import { HttpTestingController } from "@angular/common/http/testing";
import { ResourceMockData } from "./mock/resource.mock.data";

import { ResourceListService } from "./resource.list.service";

describe("Unit test for ResourceListService.\n", () => {

    let service: ResourceListService;
    let http: HttpTestingController;
    let resourceName = "users";
    let resourceListApiPath = "http://localhost:8080/" + resourceName;
    let mockData :ResourceMockData;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ResourceMockModule],
            providers: [ResourceListService]
        });
    });

    beforeEach(() => {
        service = TestBed.get(ResourceListService);
        http = TestBed.get(HttpTestingController);
        mockData = TestBed.get(ResourceMockData);
    });

    it("Service should be defined.\n", () => {
        expect(service).toBeDefined();
    });

    it("get method should fetch resource data along with its links and page.\n", () => {
        service.get(resourceListApiPath).subscribe((response) => {
            expect(response).toEqual(mockData.RESOURCE_LIST_RESPONSE);
        });

        let httpCall = http.expectOne(resourceListApiPath);
        expect(httpCall.request.method).toEqual("GET");
        httpCall.flush(mockData.RESOURCE_LIST_RESPONSE);
    });
});