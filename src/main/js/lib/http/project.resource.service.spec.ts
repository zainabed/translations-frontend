import { TestBed } from "@angular/core/testing";
import { HttpTestingController } from "@angular/common/http/testing";
import { ResourceMockModule } from "./mock/resource.mock.module";
import { ResourceMockData } from "./mock/resource.mock.data";

import { ProjectResourceService } from "./project.resource.service";
import { ProjectResource } from "./project.resource";
import { JwtToken } from "../../component/user/model/jwt.token";


describe("Unit test for ProjectResourceService.\n", () => {
    let service: ProjectResourceService;
    let http: HttpTestingController;
    let apiUrl = "http://localhsot:8080";
    let mockData: ResourceMockData;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ResourceMockModule],
            providers: [
                ProjectResourceService,
                { provide: JwtToken, useValue: {} }
            ]
        });
    });

    beforeEach(() => {
        service = TestBed.get(ProjectResourceService);
        http = TestBed.get(HttpTestingController);
        mockData = TestBed.get(ResourceMockData);
        service.jwt.token = "test"; 
    });

    it("Service should be defined.\n", () => {
        expect(service).toBeDefined();
    });

    it("getProjectResource should return HATEOP project resource response.\n", () => {
        service.get(apiUrl).subscribe((response: ProjectResource) => {
            expect(response).toEqual(mockData.PROJECT_RESOURCE_RESPONSE);
        });

        let httpCall = http.expectOne(apiUrl);
        expect(httpCall.request.method).toEqual("GET");
        httpCall.flush(mockData.PROJECT_RESOURCE_RESPONSE);
    });
});