import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { Security, SecurityFactory, AuthorizationManager, AuthUser, AuthenticationManager } from '@zainabed/security';
import { HeaderService, HeaderEntity, BACKGROUND_COLOR, HEADER_POSITION, HEADER_TYPE } from './header.service';

@Component({
    selector: "header-component",
    templateUrl: "./header.html",
    styleUrls: ["./header.scss"]
})
export class HeaderComponent implements OnInit, DoCheck {


    userDetails: AuthUser;
    public header: HeaderEntity;

    authenticationManager: AuthenticationManager;
    constructor(securityFactory: SecurityFactory, headerService: HeaderService) {
        this.authenticationManager = securityFactory.getAuthenticationManager();
        this.header = {
            title: "",
            background: BACKGROUND_COLOR.PRIMARY,
            position: HEADER_POSITION.NORMAL,
            type: HEADER_TYPE.NORMAL
        };

        headerService.getHeaderEvent().subscribe(header => {
            this.header = header;
            console.log(header);
        })
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