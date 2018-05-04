import { TestBed } from "@angular/core/testing";
import { HttpTestingController } from "@angular/common/http/testing";

import { ResourceMockModule } from "./mock/resource.mock.module";
import { ResourceMockData } from "./mock/resource.mock.data";
import { ResourceService } from "./resource.service";

describe("Unit test from ResourceService.\n", () => {
    let service: ResourceService;
    let http: HttpTestingController;
    let mockData: ResourceMockData;
    let apiUrl: string = "http://localhost:8080/projects/3";

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ResourceMockModule],
            providers: [ResourceService]
        });
    });

    beforeEach(() => {
        service = TestBed.get(ResourceService);
        http = TestBed.get(HttpTestingController);
        mockData = TestBed.get(ResourceMockData);
    });

    it("Service should be defined.\n", () => {
        expect(service).toBeDefined();
    });

    it("GET method should return single resource of give resource URl.\n", () => {
        service.get(apiUrl).subscribe((response) => {
            expect(response).toEqual(mockData.RESOURCE_RESPONSE);
        });

        let httpCall = http.expectOne(apiUrl);
        expect(httpCall.request.method).toEqual("GET");
        httpCall.flush(mockData.RESOURCE_RESPONSE);
    });
});