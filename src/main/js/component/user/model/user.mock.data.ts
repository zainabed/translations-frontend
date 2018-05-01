export const USER_GET_ALL_RESPONSE = {
    "_embedded": {
        "users": [
            {
                "createdAt": null,
                "updatedAt": null,
                "username": "zainabed",
                "email": "zainabed@gmail.com",
                "password": "abcdef",
                "status": null,
                "_links": {
                    "self": {
                        "href": "http://localhost:8080/users/1"
                    },
                    "user": {
                        "href": "http://localhost:8080/users/1"
                    },
                    "projects": {
                        "href": "http://localhost:8080/users/1/projects"
                    }
                }
            }
        ]
    },
    "_links": {
        "self": {
            "href": "http://localhost:8080/users{?page,size,sort}",
            "templated": true
        },
        "profile": {
            "href": "http://localhost:8080/profile/users"
        },
        "search": {
            "href": "http://localhost:8080/users/search"
        }
    },
    "page": {
        "size": 20,
        "totalElements": 1,
        "totalPages": 1,
        "number": 0
    }
};