import { Access } from './access';

export class UserProjectRole {
    roles: string;
    projects: string;
    users: string;
    id: number;

    constructor(apiUrl: string, access: Access) {
        this.roles = apiUrl + "/roles/" + access.roleId;
        this.projects = apiUrl + "/projects/" + access.projectId;
        this.users = apiUrl + "/users/" + access.userId;
        if (access.id) {
            this.id = access.id;
        }
    }

    static getInstance(apiUrl: string, access: Access): UserProjectRole {
        return new UserProjectRole(apiUrl, access);
    }
}