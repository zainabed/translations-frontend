import { Component, OnInit, AfterContentInit, OnDestroy } from '@angular/core';
import { environment } from "../../environments/environment";
import { ActivatedRoute, Router } from "@angular/router";

import { AppResourceData } from "./app.resource.data";
import { UserRouteNames } from "./component/user/user.route";

import { ResourceMockData } from "./lib/http/mock/resource.mock.data";
import { MatSnackBar } from '@angular/material';
import { UserStoreService } from './component/user/service/user.store.service';
import { SecurityFactory, AuthenticationManager } from '@zainabed/security';
import { RouteSecurity } from './lib/security/route.security';
import { ModalHeaderService } from './layout/header/modal/modal.header.service';
import { BottomSheetService } from './layout/bottomsheet/bottomsheet.service';
import { HeaderService, BACKGROUND_COLOR, HEADER_TYPE, HEADER_POSITION } from './layout/header/header.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit, OnDestroy {
  title = 'app';
  authenticationManager: AuthenticationManager;

  constructor(private appResourceData: AppResourceData,
    private route: ActivatedRoute,
    private router: Router,
    private mockData: ResourceMockData,
    public snackBar: MatSnackBar,
    public userStoreService: UserStoreService,
    private securityFactory: SecurityFactory,
    public modalHeaderService: ModalHeaderService,
    private bottomSheetService: BottomSheetService,
    headerService: HeaderService

  ) {
    this.authenticationManager = securityFactory.getAuthenticationManager();
    this.setHeader(headerService);
  }

  ngOnInit() {
    this.appResourceData.resource = this.route.snapshot.data.projectResource;
    this.authenticationManager.set(this.userStoreService.getItem());
    this.bottomSheetService.reset();


    if (this.userStoreService.getItem() != null) {
      this.router.navigate(["/", "projects"]);
    } else {
      this.router.navigate(["/login"]);
    }

    RouteSecurity.event.subscribe(message => {
      console.log("route error event");
      this.snackBar.open(message, null, {
        duration: 2000
      });
    });



    //   this.resourceData.resource = this.mockData.PROJECT_RESOURCE_RESPONSE;
    //   this.router.navigate(["/" + UserRouteNames.UserHome]);
  }

  setHeader(headerService: HeaderService) {
    headerService.setHeader({
      title: "Translation App",
      background: BACKGROUND_COLOR.PRIMARY,
      position: HEADER_POSITION.STICKY,
      type: HEADER_TYPE.NORMAL
    });

  }
  ngAfterContentInit() {
  }

  ngOnDestroy() {
    // this.userDetailsService.reset();
  }
}
