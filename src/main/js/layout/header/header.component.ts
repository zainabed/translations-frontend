import { Component } from '@angular/core';
import { JwtToken } from "../../component/user/model/jwt.token";

@Component({
    selector: "header-component",
    templateUrl: "./header.html",
    host: { class: "row" }
})
export class HeaderComponent {

    constructor(public jwtToken: JwtToken) {
    }
}