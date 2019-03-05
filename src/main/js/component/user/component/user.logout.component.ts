import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { JwtToken } from "../model/jwt.token";
import { AppResourceData } from "../../../app.resource.data";
import { SidebarService } from "../../../layout/sidebar/sidebar.service";
import { UserRouteSecurity } from "@user/user.route.security";

@Component({
    selector: "user-logout",
    template:"<div></div>"
})
export class UserLogoutComponent implements OnInit {

    constructor(private jwtToken: JwtToken, 
        private sidebarService: SidebarService, 
        private router: Router,
        private appResourceData: AppResourceData,
        public userRouteSecurity: UserRouteSecurity
    ) {

    }

    ngOnInit(): void {
       // this.jwtToken.reset();
        this.appResourceData.reset();
        this.sidebarService.resource = null;
        this.userRouteSecurity.logout();
        this.router.navigate(["/"]);
    }

}