import { Component, OnInit, AfterContentInit, OnDestroy } from '@angular/core';
import { environment } from "../../environments/environment";
import { ActivatedRoute, Router } from "@angular/router";

import { AppResourceData } from "./app.resource.data";
import { UserRouteNames } from "./component/user/user.route";

import { ResourceMockData } from "./lib/http/mock/resource.mock.data";
import { UserDetailsService } from '@zainabed/shield/lib/core';
import { MatSnackBar } from '@angular/material';
import { RouteSecurityEvent } from "@zainabed/security";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit, OnDestroy {
  title = 'app';
  constructor(private appResourceData: AppResourceData,
    private route: ActivatedRoute,
    private router: Router,
    private mockData: ResourceMockData,
    public userDetailsService: UserDetailsService,
    public routeSecurityEvent: RouteSecurityEvent,
    public snackBar: MatSnackBar
  ) {

  }

  ngOnInit() {
    this.appResourceData.resource = this.route.snapshot.data.projectResource;
    if (this.appResourceData.resource != null) {
      this.router.navigate(["/", "projects"]);
    }

    this.routeSecurityEvent.event.subscribe(success => {
      this.snackBar.open(success.message, null, {
        duration: 2000
      });
    }, error => {
      this.snackBar.open(error.message, null, {
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
