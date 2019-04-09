import { Component, OnInit, AfterContentInit } from "@angular/core";

import { SidebarService } from "./sidebar.service";
import { AppResourceData } from "../../app.resource.data";
import { UserDetailsService, UserSecurity, GrantedRole } from "@zainabed/shield/lib/core";


@Component({
    selector: "sidebar",
    templateUrl: "sidebar.html"
})
export class SidebarComponent implements OnInit, AfterContentInit {
    public actionList: any[];

    public settingList: any[];

    constructor(
        public sidebar: SidebarService,
        public appData: AppResourceData,
        public userDetailsService: UserDetailsService,
        public userSecurity: UserSecurity) {
        this.settingList = [
            { title: 'report', icon: "assessment", color: 'color--cornflowerblue', status: true, role: "ROLE_USER" },
            { title: 'users', icon: "person", color: 'color--cornflowerblue' , status: true, role: "ROLE_ADMIN"},
            { title: 'setting', icon: "settings", color: 'color--cornflowerblue', status: true, role: "ROLE_ADMIN" }

        ];
        this.actionList = [
            { title: 'locales', icon: "language", color: 'color--darkcyan' },
            //{ title: 'keys', icon: "vpn_key", color: 'color--darkorange' },
            { title: 'translations', icon: "translate", color: 'color--darkblue' }
        ];
        this.userDetailsService.getSubsriber().subscribe(user => {
            this.updateView();
        });

    }

    ngOnInit() {
        this.updateView();
    }

    updateView() {
        this.settingList.forEach(setting => {
            setting.status = this.getStatus(setting.role);
        });
        console.log(this.settingList);
    }

    getStatus(role) {
        return this.userSecurity.hasRole(new GrantedRole(role));
    }

    ngAfterContentInit() {

    }

    getResourceHref(name) {
        return this.appData.filterHrefUrl(this.sidebar.resource[name].href);
    }

}