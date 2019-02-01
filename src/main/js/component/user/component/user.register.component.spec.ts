import { UserRegisterComponent, UserHttp, UserForm, User } from "@user/core";
import { Observable } from "rxjs/Observable";

describe("Unit test of UserRegisterComponent #user #user-register.", () => {

    let component: UserRegisterComponent;
    let userForm;
    let userHttp;
    let snackBar;
    let httpProgress;
    let testUser: User;


    beforeEach(() => {
        userForm = jasmine.createSpyObj("userForm", ["getData"]);
        userHttp = jasmine.createSpyObj("userHtpp", ["register"]);
        snackBar = jasmine.createSpyObj("snackBar", ["open"]);
        httpProgress = {};
        userHttp.register.and.returnValue(Observable.of());
        component = new UserRegisterComponent(userHttp, userForm, snackBar, httpProgress);
        testUser = new User();
    });

    afterEach(() => {
        userForm = userHttp = null;
    });

    it("Component should have been defined.", () => {
        expect(component).toBeDefined();
    });


    it("register method should invoke getData method of userForm.", () => {
        component.register();
        expect(userForm.getData).toHaveBeenCalled();
    });

    it("register method should invoke register method of userHttp.", () => {
        userForm.getData.and.returnValue(testUser);
        component.register();
        expect(userHttp.register).toHaveBeenCalledWith(testUser);
    });

    it("onRequestFail method should call open method of snackBar.", ()=>{
        let error = {error : { message : "test"}};
        component.onRequestFail(error);
        expect(snackBar.open).toHaveBeenCalled();
    });
});