import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

// Component classes
import { UserForm } from './user.form';
import { User } from '../model/user';

describe("Unit test for UserForm.\n", () => {

    let userform: UserForm;
    let form;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                UserForm
            ],
            imports: [
                ReactiveFormsModule
            ]
        });
    });

    beforeEach(() => {
        userform = TestBed.get(UserForm);
        form = userform.form;
    });

    describe("Unit test for username field.\n", () => {
        let username;

        beforeEach(() => {
            username = form.get("username");
        });

        it("Username should not be empty.\n", () => {
            username.setValue(null);
            expect(username.invalid).toBeTruthy();
        });

        it("Username should not be less than 5 character length.\n", () => {
            username.setValue("abcd");
            expect(username.invalid).toBeTruthy();
        });

        it("Username should not be more than 20 character length.\n", () => {
            username.setValue("123456789012345678901");
            expect(username.invalid).toBeTruthy();
        });

    });


    describe("Unit test for email field validation.\n", () => {
        let email;

        beforeEach(() => {
            email = form.get("email");
        });

        it("Email field should contain valid email value.\n", () => {
            email.setValue("aa.com");
            expect(email.invalid).toBeTruthy();
        });

        it("Email should not be less than 5 character length.\n", () => {
            email.setValue("a@co");
            expect(email.invalid).toBeTruthy();
        });

        it("Email should not be more than 30 character length.\n", () => {
            email.setValue("1@345.7890123456789012345678901");
            expect(email.invalid).toBeTruthy();
        });

    });

    it("Password should not be empty.\n", () => {
        let password = userform.form.get("password");
        password.setValue(null);
        expect(password.invalid).toBeTruthy();
    });

    it("getData method should return User model.\n", () => {
        let user: User = userform.getData();
        expect(user).toBeDefined();
    });
});