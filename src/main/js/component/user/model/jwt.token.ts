import { Injectable } from "@angular/core";


@Injectable()
export class JwtToken {
    token: string;
    type: string;
    refreshToken: string;
}