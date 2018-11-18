import { TestBed } from "@angular/core/testing";
import { UserLoginComponent } from "./user.login.component";


describe("Unit test for UserLoginComponent.\n", () => {

    let component: UserLoginComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [UserLoginComponent]
        }).compileComponents();
    });

    it("Component should have been defined", () => {
        expect(component).toBeDefined();
    });
});
