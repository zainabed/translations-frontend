import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { UserDetailsService, UserDetails } from "@zainabed/shield/lib/core";

@Component({
    selector: "header-component",
    templateUrl: "./header.html",
    host: { class: "row" }
})
export class HeaderComponent implements OnInit, OnChanges {


    userDetails: UserDetails;
    constructor(public userDetailsService: UserDetailsService) {
    }

    ngOnInit(): void {
        this.userDetails = this.userDetailsService.get();
        console.log(this.userDetails);
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.userDetails = this.userDetailsService.get();
        console.log(this.userDetails);
    }


}