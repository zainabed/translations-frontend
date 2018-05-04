import { TestBed, ComponentFixture } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { RouterLink, Router, RouterModule } from "@angular/router";

import { Response } from "@angular/http";
import { HttpResource } from "../../../lib/http/http.resource";
import { Directive, Input } from "@angular/core";

import { MaterialModule } from "../../../lib/material/mareial.module";

import { UserListComponent, UserService, User } from "../user.core";
import { UserModule } from "../user.module";
import { USER_GET_ALL_RESPONSE } from "../model/user.mock.data";
import { AppResourceData } from "../../../app.resource.data";
import { ResourceMockData } from "../../../lib/http/mock/resource.mock.data";
import { ResourceListService } from "../../../lib/http/resource.list.service";

@Directive({
    selector: '[routerLink]',
    host: { '(click)': 'onClick()' }
})
export class RouterLinkDirectiveStub {
    @Input('routerLink') linkParams: any;
    navigatedTo: any = null;

    onClick() {
        this.navigatedTo = this.linkParams;
    }
}

describe("BDD test for UserListComponent.\n", () => {
    let component: UserListComponent;
    let fixture: ComponentFixture<UserListComponent>;
    let appResourceData: AppResourceData;
    let service;
    let mockData: ResourceMockData;

    beforeEach(() => {
        service = jasmine.createSpyObj("UserService", ["get"]);
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                MaterialModule
            ],
            providers: [
                { provide: ResourceListService, useValue: service },
                { provide: AppResourceData, useValue: jasmine.createSpyObj("AppResourceData", ["getResourceListUrlFor"]) },
                ResourceMockData
            ],
            declarations: [
                RouterLinkDirectiveStub
                , UserListComponent
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserListComponent);
        component = fixture.componentInstance;

        mockData = TestBed.get(ResourceMockData);
        appResourceData = TestBed.get(AppResourceData);
        appResourceData.getResourceListUrlFor(component.resourceName).and.returnValue(mockData.PROJECT_RESOURCE_RESPONSE["_links"][component.resourceName]["href"]);

        service = fixture.debugElement.injector.get(ResourceListService);
        service.get.and.returnValue(Observable.of(USER_GET_ALL_RESPONSE));
    });

    it("Component to be defined.\n", () => {
        expect(component).toBeDefined();
    });

    it("Component resource name should present in project resource list and return valid href value.\n", () => {
        component.ngOnInit();
        expect(component.apiUrl).toEqual(mockData.PROJECT_RESOURCE_RESPONSE["_links"][component.resourceName]["href"]);
    });

    it("On component load event service should fetch all users.\n", () => {

        component.ngOnInit();
        fixture.detectChanges();
        expect(component.list).toEqual(USER_GET_ALL_RESPONSE._embedded.users);
    });

    describe("Test for navigation to new user page.\n", () => {
        let link;
        let routerObject;
        beforeEach(() => {
            fixture.detectChanges();
            //link = fixture.debugElement.query(By.css(".model-path-new"));
            link = fixture.debugElement.query(By.directive(RouterLinkDirectiveStub));
            console.log(link);
            routerObject = link.injector.get(RouterLinkDirectiveStub);
            console.log(routerObject);
        });

        it("Router object link should not have been called.\n", () => {
            expect(routerObject.navigatedTo).toBeNull();
        });

        it("On click RouterObject should navigate to user new page.\n", () => {
            link.triggerEventHandler("click", null);
            fixture.detectChanges();
            expect(routerObject.navigatedTo).toEqual("/users/new");
        });
    });
});