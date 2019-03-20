import { UserPrincipal, GrantedRole } from "@zainabed/shield/lib/core";


export class UserPricipalImpl extends UserPrincipal {


    isAccountExpired(): boolean {
        return false;
    }
    isAccountBlocked(): boolean {
        return false;
    }
    getRoles(): GrantedRole[] {
        return this.roles;
    }
    getUsername(): string {
        return this.username;
    }
    getId(): string {
        return this.id;
    }

    getCredentials() {
        return this.credentails;
    }
}