import { Injectable } from "@angular/core";
import { JwtToken } from "../../component/user/model/jwt.token";

@Injectable()
export class HeaderService {
    transparentBackground: boolean;

    constructor(public jwtToken: JwtToken) {
        this.transparentBackground = false;
    }
}