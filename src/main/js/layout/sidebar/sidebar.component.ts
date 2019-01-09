import { Component, OnInit, AfterContentInit } from "@angular/core";

import { SidebarService } from "./sidebar.service";
import {AppResourceData} from "../../app.resource.data";

@Component({
    selector: "sidebar",
    templateUrl: "sidebar.html"
})
export class SidebarComponent implements OnInit, AfterContentInit {
    private actionList = [
        { title: 'locales', icon: "language", color: 'color--darkcyan' },
        //{ title: 'keys', icon: "vpn_key", color: 'color--darkorange' },
        { title: 'translations', icon: "translate", color: 'color--darkblue' }
    ];

    private settingList = [
        { title: 'users', icon: "person", color: 'color--cornflowerblue' },
        { title: 'setting', icon: "settings", color: 'color--cornflowerblue' }
    ];

    constructor(private sidebar: SidebarService, private appData: AppResourceData ) {
    }

    ngOnInit() {

    }

    ngAfterContentInit() {

    }

    getResourceHref(name) {
        return this.appData.filterHrefUrl(this.sidebar.resource[name].href);
    }

}