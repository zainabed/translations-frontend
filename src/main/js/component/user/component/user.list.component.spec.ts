import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Observable } from 'rxjs/Observable';
import { Response } from "@angular/http";
import { HttpResource } from "../../../lib/http/http.resource";


import { UserListComponent, UserService, User } from "../user.core";
import { UserModule } from "../user.module";
import { USER_GET_ALL_RESPONSE } from "../model/user.mock.data";

describe("BDD test for UserListComponent.\n", () => {
    let component: UserListComponent;
    let fixture: ComponentFixture<UserListComponent>;
    let userService;

    beforeEach(() => {
        userService = jasmine.createSpyObj("UserService", ["get"]);
        TestBed.configureTestingModule({
            imports: [UserModule],
            providers: [
                { provide: UserService, useValue: userService }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserListComponent);
        component = fixture.componentInstance;
        userService = fixture.debugElement.injector.get(UserService);
    });

    it("Component to be defined.\n", () => {
        expect(component).toBeDefined();
    });

    it("On component load event service should fetch all users.\n", () => {
        userService.get.and.returnValue(Observable.of({ "list": USER_GET_ALL_RESPONSE._embedded }));
        component.ngOnInit();
        fixture.detectChanges();
        expect(component.list).toEqual(USER_GET_ALL_RESPONSE._embedded);
    });

});