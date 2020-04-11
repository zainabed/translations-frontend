import { Component, OnInit, AfterContentInit } from "@angular/core";

import { SidebarService } from "./sidebar.service";
import { AppResourceData } from "../../app.resource.data";
import { SecurityFactory, AuthenticationManager, AuthorizationManager } from '@zainabed/security';


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
        private securityFactory: SecurityFactory) {
        this.settingList = [
            { title: 'report', icon: "assessment", color: 'color--cornflowerblue', status: true, role: "ROLE_USER" },
            { title: 'access', icon: "person", color: 'color--cornflowerblue', status: true, role: "ROLE_ADMIN" },
            { title: 'setting', icon: "settings", color: 'color--cornflowerblue', status: true, role: "ROLE_ADMIN" }

        ];
        this.actionList = [
            { title: 'locales', icon: "language", color: 'color--darkcyan' },
            //{ title: 'keys', icon: "vpn_key", color: 'color--darkorange' },
            { title: 'translations', icon: "translate", color: 'color--darkblue' }
        ];

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

    getStatus(role: string) {
        let authorizationManager: AuthorizationManager = this.securityFactory.getAuthorizationManager();
        return authorizationManager.hasRole(role);
    }

    ngAfterContentInit() {

    }

    getResourceHref(name) {
        if (!this.sidebar.resource[name]) return "/";
        return this.appData.filterHrefUrl(this.sidebar.resource[name].href);
    }

    isActive() {
        window.event.stopPropagation();
        let event = new Event("toggle-navigation");
        document.dispatchEvent(event);
    }

    isMobile(){
        if(document.body.clientWidth <= 420) {
            return true;
        }else{
            return false;
        }
    }
}