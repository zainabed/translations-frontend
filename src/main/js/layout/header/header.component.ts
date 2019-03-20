import { Component } from '@angular/core';
import { UserDetailsService } from "@zainabed/shield/lib/core";

@Component({
    selector: "header-component",
    templateUrl: "./header.html",
    host: { class: "row" }
})
export class HeaderComponent {
    jwtToken: any;
    constructor(public userDetailsService: UserDetailsService) {
        let userDetails = this.userDetailsService.get();
        if (userDetails) {
            this.jwtToken = userDetails.getCredentials();
        }

    }
}