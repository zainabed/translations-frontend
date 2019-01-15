import {Component} from '@angular/core';
import { JwtToken } from "../../component/user/model/jwt.token";

@Component({
    templateUrl:"./header.html"
})
export class HeaderComponent {

    constructor(public jwtToken: JwtToken){
    }
}