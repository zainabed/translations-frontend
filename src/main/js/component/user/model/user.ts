//import {Resource} from 'angular4-hal';
import { UserPrincipal, GrantedRole } from "@zainabed/shield/lib/core";

export class User extends UserPrincipal {

    password: string;

    public isAccountExpired(): boolean {
        return false;
    }

    public isAccountBlocked(): boolean {
        return false;
    }

    public getRoles(): GrantedRole[] {
        return this.roles;
    }

    public getUsername(): string {
        return this.username;
    }

    public getId(): string {
        return this.id;
    }

    public getCredentials() {
        return this.credentails;
    }

    public static buildRoles(roles: any[]) {
        return roles.map(role => {
            return new GrantedRole(role._role);
        });
    }


}