import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { UserDetailsService, UserDetails } from "@zainabed/shield/lib/core";

@Component({
    selector: "header-component",
    templateUrl: "./header.html",
    host: { class: "row" }
})
export class HeaderComponent implements OnInit {


    userDetails: UserDetails;
    constructor(public userDetailsService: UserDetailsService) {
    }

    ngOnInit(): void {
        this.userDetailsService.getSubsriber().subscribe(userDetails => {
            this.userDetails = userDetails;
            console.log(this.userDetails);
        })

    }




}