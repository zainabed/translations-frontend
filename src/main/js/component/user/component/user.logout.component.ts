import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { JwtToken } from "../model/jwt.token";
import { SidebarService } from "../../../layout/sidebar/sidebar.service";

@Component({
    selector: "user-logout",
    template:"<div></div>"
})
export class UserLogoutComponent implements OnInit {

    constructor(private jwtToken: JwtToken, private sidebarService: SidebarService, private router: Router) {

    }

    ngOnInit(): void {
        this.jwtToken.token = null;
        this.jwtToken.user = null;
        this.sidebarService.resource = null;
        this.router.navigate(["/login"]);
    }

}