import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Security, SecurityFactory, AuthorizationManager, AuthUser, AuthenticationManager } from '@zainabed/security';

@Component({
    selector: "header-component",
    templateUrl: "./header.html",
    host: { class: "row" }
})
export class HeaderComponent implements OnInit {

    userDetails: AuthUser;

    authenticationManager: AuthenticationManager;
    constructor(securityFactory: SecurityFactory) {
        this.authenticationManager = securityFactory.getAuthenticationManager();
    }

    ngOnInit(): void {
        this.userDetails = this.authenticationManager.get();
    }




}