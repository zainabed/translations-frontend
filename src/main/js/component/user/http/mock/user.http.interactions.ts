import { PactWeb, Matchers } from '@pact-foundation/pact-web';

const contentTypeJson = { "Content-Type": "application/json" };

export const UserPactInteractions = [
    {
        state: "user registration",
        uponReceiving: "A Post request to create new User",
        withRequest: {
            method: "POST",
            path: "/users",
            body: {
                "username": "testuser",
                "password": "testpassword",
                "email": "test@email.com",
            },
            headers: contentTypeJson
        },
        willRespondWith: {
            status: 201,
            body: Matchers.somethingLike(
                {
                    "username": "testuser",
                    "password": "testpassword",
                    "email": "test@email.com",
                    "id": 1
                }
            ),
            headers: contentTypeJson
        }
    },
    {
        state: "user authentication",
        uponReceiving: "A POST request to authenticate user",
        withRequest: {
            method: "POST",
            path: "/auth",
            headers: {
                "Authorization" : "Basic dGVzdDoxMjM=",
            }
        },
        willRespondWith: {
            status: 200,
            body: Matchers.somethingLike({
                token : "test",
                type: "Bearer"
            }),
            headers: contentTypeJson
        }
    }
]