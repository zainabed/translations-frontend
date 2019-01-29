import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PactWeb, Matchers } from '@pact-foundation/pact-web';

import { User } from "../model/user";
import { UserHttp } from "./user.http";

describe("Unit test for User Registration HTTP service.\n", () => {
    let http: UserHttp;
    let apiUrl: string;
    let provider: PactWeb;
    let user: User;
    let userResponse: User;
    let contentTypeJson: { 'Content-Type': 'application/json' };


    beforeAll((done) => {
        provider = new PactWeb({
            consumer: "ui",
            provider: "api",
            port: 1234,
            host: "localhost"
        });

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        setTimeout(done, 2000);

        provider.removeInteractions();

    });

    afterAll((done) => {
        provider.finalize().then(() => {
            console.log("pact created");
            done();
        }, (error) => {
            console.log(error);
            done.fail(error);
        })
    });

    describe("Testing API services.", () => {
        beforeAll((done) => {
            user = new User();
            user.username = "testuser";
            user.password = "testpassword";
            user.email = "test@email.com";
            userResponse = user;
            userResponse.id = 1;

            provider.addInteraction({
                state: "As user I should be able to register myself into system",
                uponReceiving: "A Post request to create new User",
                withRequest: {
                    method: "POST",
                    path: "/users",
                    body: user,
                    headers: contentTypeJson
                },
                willRespondWith: {
                    status: 201,
                    body: Matchers.somethingLike(userResponse),
                    headers: contentTypeJson
                }
            }).then(done, error => done.fail(error));
        });

        beforeEach((done) => {
            TestBed.configureTestingModule({
                imports: [
                    HttpClientModule
                ],
                providers: [UserHttp]
            });

            http = TestBed.get(UserHttp);
            apiUrl = http.apiUrl;
            done();
        });

        it("Service should be defined.\n", (done) => {
            expect(http).toBeDefined();
            done();
        });

        it("Should create user via registration process", (done) => {
            http.register(user).subscribe(response => {
                expect(response.id).toEqual(userResponse.id);
                done();
            }, error => {
                done.fail(error);
            });

        });
    });


});