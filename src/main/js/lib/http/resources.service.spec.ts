import { TestBed } from "@angular/core/testing";
import { ResourceMockModule } from "./mock/resource.mock.module";
import { HttpTestingController } from "@angular/common/http/testing";
import { ResourceMockData } from "./mock/resource.mock.data";

import { ResourcesService } from "./resources.service";

describe("Unit test for ResourcesService.\n", () => {

    let service: ResourcesService;
    let http: HttpTestingController;
    let resourceName = "users";
    let resourceListApiPath = "http://localhost:8080/" + resourceName;
    let mockData: ResourceMockData;
    let httpCall;
   
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ResourceMockModule],
            providers: [ResourcesService]
        });
    });

    beforeEach(() => {
        service = TestBed.get(ResourcesService);
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

        httpCall = http.expectOne(resourceListApiPath);
        expect(httpCall.request.method).toEqual("GET");
        httpCall.flush(mockData.RESOURCE_LIST_RESPONSE);
    });

    it("POST method should send resource object to resource api path .\n", () => {
        service.post(resourceListApiPath, mockData.RESOURCE_OBJECT).subscribe((response) => {
            expect(response).toEqual(mockData.RESOURCE_RESPONSE_OBJECT);
        });

        httpCall = http.expectOne(resourceListApiPath);
        expect(httpCall.request.method).toEqual("POST");
        httpCall.flush(mockData.RESOURCE_RESPONSE_OBJECT);
    });
});