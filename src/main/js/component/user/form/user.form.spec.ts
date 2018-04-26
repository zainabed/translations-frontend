import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

// Component classes
import { UserForm } from './user.form';
import { User } from '../model/user';

describe("Unit test for UserForm.\n", () => {

    let userform: UserForm;

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
    });

    it("Username should not be empty.\n", () => {
        let username = userform.form.get("username");
        username.setValue(null);
        expect(username.invalid).toBeTruthy();
    });

    it("Email field should contain valid email value.\n", () => {
        let email = userform.form.get("email");
        email.setValue("aa.com");
        expect(email.invalid).toBeTruthy();
    });

    it("Password should not be empty.\n", () => {
        let password = userform.form.get("password");
        password.setValue(null);
        expect(password.invalid).toBeTruthy();
    });

    it("getData method should return User model.\n", () => {
        let user: User=  userform.getData();
        expect(user).toBeDefined();
    })
});