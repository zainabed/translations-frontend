import { UserPrincipal, GrantedRole } from "@zainabed/shield/lib/core";


export class UserPricipalImpl extends UserPrincipal {


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
}