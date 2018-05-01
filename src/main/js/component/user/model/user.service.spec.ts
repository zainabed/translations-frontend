import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { UserService } from './user.service';
import { USER_GET_ALL_RESPONSE } from './user.mock.data';
import { User } from './user';

describe("Unit test for User HTTP service.\n", () => {
    let service: UserService;
    let http: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UserService]
        });
    });

    beforeEach(() => {
        service = TestBed.get(UserService);
        http = TestBed.get(HttpTestingController);
    });

    it("findAll method should fetch all user from API.\n", () => {
        let users = service.get().subscribe((userService: UserService) => {
            console.log(userService);
            expect(userService.list.length).toEqual(1);
            
        });
        let httpCall = http.expectOne("http://localhost:8080/users");
        expect(httpCall.request.method).toEqual("GET");
        httpCall.flush(USER_GET_ALL_RESPONSE);
    });
});