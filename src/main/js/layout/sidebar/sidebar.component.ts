import { Component, OnInit, AfterContentInit } from "@angular/core";

import { SidebarService } from "./sidebar.service";

@Component({
    selector: "sidebar",
    templateUrl: "sidebar.html"
})
export class SidebarComponent implements OnInit, AfterContentInit {
    private actionList = [
        { title: 'locales', icon: "language", color: 'color--darkcyan' },
        { title: 'keys', icon: "vpn_key", color: 'color--darkorange' },
        { title: 'translations', icon: "translate", color: 'color--darkblue' }
    ];

    private settingList = [
        { title: 'users', icon: "person", color: 'color--cornflowerblue' }
    ];

    constructor(private sidebar: SidebarService) {
    }

    ngOnInit() {

    }

    ngAfterContentInit() {

    }

    getResourceHref(name) {
        console.log(name);
        console.log(this.sidebar.resource);
        return this.sidebar.resource[name].href;
    }

}