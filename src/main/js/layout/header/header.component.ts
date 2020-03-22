import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { Security, SecurityFactory, AuthorizationManager, AuthUser, AuthenticationManager } from '@zainabed/security';

@Component({
    selector: "header-component",
    templateUrl: "./header.html",
    styleUrls: ["./header.scss"]
})
export class HeaderComponent implements OnInit, DoCheck {


    userDetails: AuthUser;

    authenticationManager: AuthenticationManager;
    constructor(securityFactory: SecurityFactory) {
        this.authenticationManager = securityFactory.getAuthenticationManager();
    }

    ngOnInit(): void {

    }

    ngDoCheck(): void {
        this.userDetails = this.authenticationManager.get();
    }

    toggleSideBar($event: any) {
        $event.stopPropagation();
        let event = new Event("toggle-navigation");
        document.dispatchEvent(event);
    }

}