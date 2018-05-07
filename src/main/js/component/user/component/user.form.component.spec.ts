/*import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Observable } from 'rxjs/Observable';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpResponse } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { MaterialModule } from "../../../lib/material/mareial.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserModule } from "../user.module";
import { UserFormComponent } from "./user.form.component";
import { Component } from "@angular/core";
import { UserForm, UserService, User } from "../user.core";

@Component({ selector: 'router-outlet', template: '' })
class RouterOutletStubComponent { }

describe("BDD test for UserFormComponent.\n", () => {
    let component: UserFormComponent;
    let fixture: ComponentFixture<UserFormComponent>;
    let userService;
    let router;

    beforeEach(() => {
        userService = jasmine.createSpyObj("userService", ["save"]);

        TestBed.configureTestingModule({
            providers: [
                UserForm,
                { provide: UserService, useValue: userService },
                { provide: Router, useValue: jasmine.createSpyObj("Router", ["navigate"]) }
            ],
            imports: [
                RouterTestingModule,
                MaterialModule,
                ReactiveFormsModule,
                BrowserAnimationsModule
            ],
            declarations: [
                RouterOutletStubComponent,
                UserFormComponent
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserFormComponent);
        component = fixture.componentInstance;
        userService = fixture.debugElement.injector.get(UserService);
        userService.save.and.returnValue(new Observable<HttpResponse<User>>());
        router = fixture.debugElement.injector.get(Router);
    });

    it("Component should be defined.\n", () => {
        expect(component).toBeDefined();
    });

    it("navigateToUserList method should call navigate method of Router.\n", () => {
        component.navigateToUserList({});
        expect(router.navigate).toHaveBeenCalled();
    });

    it("Save method should call save method of UserService.\n", () => {
        component.save();
        expect(userService.save).toHaveBeenCalledWith(component.userForm.getData());
    });

    describe("Test for username field validation.\n", () => {
        let username: HTMLInputElement;
        let errorMesage: HTMLElement;
        let fieldName = "username";
        let usernameFormControl;

        beforeEach(() => {
            username = fixture.debugElement.nativeElement.querySelector("#username");
            usernameFormControl = component.userForm.form.get(fieldName);
        });

        it("Empty username should display error message.\n", () => {
            usernameFormControl.setValue("");
            expectErrorMessageToBeTruthy(username, fixture, "#username-empty-error", false);
        });

        it("Empty username should not display error message.\n", () => {
            usernameFormControl.setValue("abcded");
            expectErrorMessageToBeTruthy(username, fixture, "#username-empty-error", true);
        });

        it("Min length error message should be displayed when username value is less than 5.\n", () => {
            usernameFormControl.setValue("abcd");
            expectErrorMessageToBeTruthy(username, fixture, "#username-less-error", false);

        });

        it("Max length error message should be displayed when username value is more than 20.\n", () => {
            usernameFormControl.setValue("123456789012345678901");
            expectErrorMessageToBeTruthy(username, fixture, "#username-max-error", false);

        });

    });


    describe("Test for email field validation.\n", () => {
        let email: HTMLInputElement;
        let errorMesage: HTMLElement;
        let fieldName = "email";
        let emailFormControl;

        beforeEach(() => {
            email = fixture.debugElement.nativeElement.querySelector("#username");
            emailFormControl = component.userForm.form.get(fieldName);
        });

        it("Empty email should display error message.\n", () => {
            emailFormControl.setValue("");
            expectErrorMessageToBeTruthy(email, fixture, "#email-invalid-error", false);
        });

        it("Empty email should not display error message.\n", () => {
            emailFormControl.setValue("a@c.ed");
            expectErrorMessageToBeTruthy(email, fixture, "#email-invalid-error", true);
        });

        it("Min length error message should be displayed when email value is less than 5.\n", () => {
            emailFormControl.setValue("a@cd");
            expectErrorMessageToBeTruthy(email, fixture, "#email-less-error", false);

        });

        it("Max length error message should be displayed when email value is more than 20.\n", () => {
            emailFormControl.setValue("123@567890123456.89012345678901");
            expectErrorMessageToBeTruthy(email, fixture, "#email-max-error", false);
        });

    });

    describe("Test for email field validation.\n", () => {
        let password: HTMLInputElement;
        let errorMesage: HTMLElement;
        let fieldName = "password";
        let passwordFormControl;

        beforeEach(() => {
            password = fixture.debugElement.nativeElement.querySelector("#username");
            passwordFormControl = component.userForm.form.get(fieldName);
        });

        it("Empty password should display error message.\n", () => {
            passwordFormControl.setValue("");
            expectErrorMessageToBeTruthy(password, fixture, "#password-empty-error", false);
        });

        it("Empty password should not display error message.\n", () => {
            passwordFormControl.setValue("a@c.ed");
            expectErrorMessageToBeTruthy(password, fixture, "#password-empty-error", true);
        });

    });


});

function expectErrorMessageToBeTruthy(input, fixture, errorId, expectNull) {
    input.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    let errorMesage = fixture.debugElement.nativeElement.querySelector(errorId);
    if (expectNull) {
        expect(errorMesage).toBeNull();
    } else {
        expect(errorMesage).not.toBeNull();
    }

}*/