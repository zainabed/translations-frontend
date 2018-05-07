
import { Injectable } from "@angular/core";
import { ProjectResource } from "../project.resource";
import { Resources } from "../resources";

@Injectable()
export class ResourceMockData {
    PROJECT_RESOURCE_RESPONSE: ProjectResource = {
        "_links": {
            "projects": {
                "href": "http://localhost:8080/projects{?page,size,sort}",
                "templated": true
            },
            "users": {
                "href": "http://localhost:8080/users{?page,size,sort}",
                "templated": true
            },
            "translations": {
                "href": "http://localhost:8080/translations{?page,size,sort}",
                "templated": true
            },
            "key": {
                "href": "http://localhost:8080/key{?page,size,sort}",
                "templated": true
            },
            "locales": {
                "href": "http://localhost:8080/locales{?page,size,sort}",
                "templated": true
            },
            "people": {
                "href": "http://localhost:8080/people{?page,size,sort}",
                "templated": true
            },
            "profile": {
                "href": "http://localhost:8080/profile"
            }
        }
    };
    RESOURCE_LIST_RESPONSE: Resources = {
        "_embedded": {
            "projects": [
                {
                    "createdAt": null,
                    "updatedAt": null,
                    "name": "NCCP Card",
                    "description": "Test description",
                    "imageUri": null,
                    "_links": {
                        "self": {
                            "href": "http://localhost:8080/projects/2"
                        },
                        "project": {
                            "href": "http://localhost:8080/projects/2"
                        },
                        "users": {
                            "href": "http://localhost:8080/projects/2/users"
                        }
                    }
                },
                {
                    "createdAt": null,
                    "updatedAt": null,
                    "name": "NCCP Card 11",
                    "description": "Test description 11",
                    "imageUri": null,
                    "_links": {
                        "self": {
                            "href": "http://localhost:8080/projects/3"
                        },
                        "project": {
                            "href": "http://localhost:8080/projects/3"
                        },
                        "users": {
                            "href": "http://localhost:8080/projects/3/users"
                        }
                    }
                }
            ]
        },
        "_links": {
            "self": {
                "href": "http://localhost:8080/projects{?page,size,sort}",
                "templated": true
            },
            "profile": {
                "href": "http://localhost:8080/profile/projects"
            },
            "search": {
                "href": "http://localhost:8080/projects/search"
            }
        },
        "page": {
            "size": 20,
            "totalElements": 2,
            "totalPages": 1,
            "number": 0
        }
    };
    RESOURCE_RESPONSE = {
        "createdAt": null,
        "updatedAt": null,
        "name": "NCCP Card 11",
        "description": "Test description 11",
        "imageUri": null,
        "_links": {
            "self": {
                "href": "http://localhost:8080/projects/3"
            },
            "project": {
                "href": "http://localhost:8080/projects/3"
            },
            "users": {
                "href": "http://localhost:8080/projects/3/users"
            }
        }
    };
    RESOURCE_OBJECT = { "name": "testname", "description": "test description" };
    RESOURCE_RESPONSE_OBJECT = { "name": "testname", "description": "test description", "_links": { "self": "" } };
}
