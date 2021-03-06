import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";

import { AppResourceData } from "../../../app.resource.data";
import { ResourcesService } from "../../../lib/http/resources.service";
import { ResourceService } from "../../../lib/http/resource.service";
import { Resources } from "../../../lib/http/resources";
import { ResourceMockData } from "../../../lib/http/mock/resource.mock.data";

import { UserListComponent } from "./user.list.component";
import { UserRquireModule } from "../user.require.module";

describe("BDD test for UserListComponent.\n", () => {
    let component;
    let fixture: ComponentFixture<UserListComponent>;
    let service;
    let mockData: ResourceMockData;
    let resourceService: ResourceService;

    beforeEach(() => {
        resourceService = jasmine.createSpyObj("ResourceService", ["get", "patch", "delete"]);

        TestBed.configureTestingModule({
            imports: [UserRquireModule],
            declarations: [UserListComponent],
            providers: [
                { provide: ResourceService, useValue: resourceService },
                { provide: AppResourceData, useValue: jasmine.createSpyObj("AppResourceData", ["getResourceListUrlFor"]) },
                { provide: ResourcesService, useValue: jasmine.createSpyObj("ResourcesService", ["get"]) },
                { provide: Router, useValue: jasmine.createSpyObj("Router", ["navigate"]) },
                ResourceMockData
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserListComponent);
        component = fixture.componentInstance;
        service = fixture.debugElement.injector.get(ResourcesService);
        mockData = fixture.debugElement.injector.get(ResourceMockData);

        service.get.and.returnValue(Observable.of(mockData.RESOURCE_LIST_RESPONSE));

        fixture.detectChanges();
    });

    /*it("Component should be defined.\n", () => {
        expect(component).toBeDefined();
    });

    it("ngOnInit should call get method of service.\n", () => {
        component.ngOnInit();
        expect(service.get).toHaveBeenCalled();
    });

    it("onGetFail method should set custome error message.\n", () => {
        component.onGetFail({});
        expect(component.errorMessage).not.toBeNull();
    });*/
});