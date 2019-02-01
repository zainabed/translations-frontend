import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { PactWeb, Matchers } from '@pact-foundation/pact-web';
import { Resource } from "../../../lib/http/resource";
import { User } from "../model/user";
import { UserHttp } from "./user.http";


import { UserPactInteractions } from "./mock/user.http.interactions";

function buildInteractions(interactions, provider: PactWeb, done) {
    interactions.forEach(interaction => {
        provider.addInteraction(interaction).then(done, error => done.fail(error));
    });
}

const userFactory = () => {
    let user = new User();
    user.username = "testuser";
    user.password = "testpassword";
    user.email = "test@email.com";
    return user;
}

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
            port: 8080,
            host: "localhost"
        });

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        setTimeout(done, 2000);
        provider.removeInteractions();

    });

    afterAll((done) => {
        provider.finalize().then(() => {
            done();
        }, (error) => {
            done.fail(error);
        })
    });

    describe("Testing API services.", () => {
        beforeAll((done) => {
            user = userFactory();
            userResponse = userFactory();
            userResponse.id = 1;

            buildInteractions(UserPactInteractions, provider, done);
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
            http.register(user).subscribe((response: HttpResponse<any>) => {
                console.log(response);
             //   expect(response.status).toEqual(201);
                done(); 
            }, error => {
                done.fail(error); 
            });

        });

        it("Should authenticate user", (done) => {
            http.authenticate("test", "123").subscribe(response => {
                expect(response.token).toEqual("test");
                done();
            }, error => {
                done.fail(error);
            })
        });
    });


});