import { AuthUser } from '@zainabed/security';

//import {Resource} from 'angular4-hal';

export class User implements AuthUser {


    password: string;
    username: string;
    id: string;
    roles: Set<string>;
    credentails: string;
    email: string;
    _links: any;

    constructor(userConst: any) {
        if (!userConst) return;
        Object.assign(this, userConst);
        this.setRoles(userConst.roles);
    }

    setRoles(roles: Array<string>) {

        this.roles = new Set(roles);
    }

    public isAccountExpired(): boolean {
        return false;
    }

    public isAccountBlocked(): boolean {
        return false;
    }

    public getUsername(): string {
        return this.username;
    }

    

    public getId(): string {
        return this.id;
    }

    getRoles(): Set<string> {
        return new Set(this.roles);
    }

    getCredentials() {
        return this.credentails;
    }



}