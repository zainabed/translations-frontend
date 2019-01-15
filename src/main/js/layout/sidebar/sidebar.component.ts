import { Component, OnInit, AfterContentInit } from "@angular/core";

import { SidebarService } from "./sidebar.service";
import {AppResourceData} from "../../app.resource.data";

@Component({
    selector: "sidebar",
    templateUrl: "sidebar.html"
})
export class SidebarComponent implements OnInit, AfterContentInit {
    public actionList = [
        { title: 'locales', icon: "language", color: 'color--darkcyan' },
        //{ title: 'keys', icon: "vpn_key", color: 'color--darkorange' },
        { title: 'translations', icon: "translate", color: 'color--darkblue' }
    ];

    public settingList = [
        { title: 'report', icon: "assessment", color: 'color--cornflowerblue' },
        { title: 'users', icon: "person", color: 'color--cornflowerblue' },
        { title: 'setting', icon: "settings", color: 'color--cornflowerblue' },
        
    ];

    constructor(public sidebar: SidebarService, public appData: AppResourceData ) {
    }

    ngOnInit() {

    }

    ngAfterContentInit() {

    }

    getResourceHref(name) {
        return this.appData.filterHrefUrl(this.sidebar.resource[name].href);
    }

}