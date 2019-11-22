import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppResourceData } from "../../../app.resource.data";
import { SidebarService } from "../../../layout/sidebar/sidebar.service";
import { UserStoreService } from "../service/user.store.service";
import { SecurityFactory, AuthenticationManager } from '@zainabed/security';

@Component({
    selector: "user-logout",
    template: "<div></div>"
})
export class UserLogoutComponent implements OnInit {

    constructor(
        private sidebarService: SidebarService,
        private router: Router,
        private appResourceData: AppResourceData,
        private securityFactory: SecurityFactory,
        public userStoreService: UserStoreService
    ) {

    }

    ngOnInit(): void {
        // this.jwtToken.reset();
        this.appResourceData.reset();
        this.sidebarService.resource = null;
        let authenticationManager: AuthenticationManager = this.securityFactory.getAuthenticationManager();
        authenticationManager.reset();
        this.userStoreService.removeItem();
        this.router.navigate(["/login"]);
    }

}