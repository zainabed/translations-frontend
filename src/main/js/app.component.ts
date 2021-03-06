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
    private securityFactory: SecurityFactory

  ) {
    this.authenticationManager = securityFactory.getAuthenticationManager();
  }

  ngOnInit() {
    this.appResourceData.resource = this.route.snapshot.data.projectResource;
    this.authenticationManager.set(this.userStoreService.getItem());
    console.log(this.userStoreService.getItem());
    console.log( this.authenticationManager.get());
    if (this.userStoreService.getItem() != null) {
      this.router.navigate(["/", "projects"]);
    }else{
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
  ngAfterContentInit() {
  }

  ngOnDestroy() {
    // this.userDetailsService.reset();
  }
}
