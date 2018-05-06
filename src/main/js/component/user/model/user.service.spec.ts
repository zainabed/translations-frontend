import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { UserService } from './user.service';
import { USER_GET_ALL_RESPONSE, USER_GET_ONE_RESPONSE } from './user.mock.data';
import { User } from './user';
import { HttpResponse } from "selenium-webdriver/http";

describe("Unit test for User HTTP service.\n", () => {
    let service: UserService;
    let http: HttpTestingController;
    let httpCall;
    let endPoint = "http://localhost:8080/users";

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

    it("GET method should fetch all Users from API.\n", () => {
        service.get().subscribe((userService: UserService) => {
            expect(userService.list.length).toEqual(1);
        });
        httpCall = http.expectOne(endPoint);
        expect(httpCall.request.method).toEqual("GET");
        httpCall.flush(USER_GET_ALL_RESPONSE);
    });

    it("Get method should return single User instance.\n", () => {
        service.getOne(1).subscribe((user => {
            expect(user).toBeDefined();
        }));
        httpCall = http.expectOne(endPoint + "/1");
        expect(httpCall.request.method).toEqual("GET");
        httpCall.flush(USER_GET_ONE_RESPONSE);
    });

    it("Save method should submit User object via API call.\n", () => {
        this.user = new User();
        service.save(this.user).subscribe((response) => {
            expect(response.status).toBe(201);
        });

        httpCall = http.expectOne(endPoint);
        expect(httpCall.request.method).toEqual("POST");
        httpCall.flush(this.user, { status: 201, statusText: "Object created" });
    });

    it("Update method should update part of object.\n", () => {
        this.user = new User();
        service.update(this.user).subscribe(response => {
            expect(response.status).toBe(204);
        });

        httpCall = http.expectOne(endPoint);
        expect(httpCall.request.method).toEqual("PATCH");
        httpCall.flush(this.user, { status: 204, statusText: "User is updated" });
    });

    it("Delete method should delete user using API.\n", () => {
        let id = 1;
        service.delete(id).subscribe(response => {
            expect(response.status).toBe(204);
        });

        httpCall = http.expectOne(`${endPoint}/${id}`);
        expect(httpCall.request.method).toEqual("DELETE");
        httpCall.flush(this.user, { status: 204, statusText: "User is deleted" });
    });
});