import { Component, OnInit, AfterContentInit } from '@angular/core';
import { environment } from "../../environments/environment";
import { ActivatedRoute, Router } from "@angular/router";

import { AppResourceData } from "./app.resource.data";
import { UserRouteNames } from "./component/user/user.route";

import { ResourceMockData } from "./lib/http/mock/resource.mock.data";

import { JwtToken } from "./component/user/model/jwt.token";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {
  title = 'app';
  constructor(private appResourceData: AppResourceData,
    private route: ActivatedRoute,
    private router: Router,
    private mockData: ResourceMockData,
    public jwtToken: JwtToken
  ) {

  }

  ngOnInit() {
    this.appResourceData.resource = this.route.snapshot.data.projectResource;
    if (this.appResourceData.resource != null) {
      this.router.navigate(["/", "projects"]);
    }
    
    //   this.resourceData.resource = this.mockData.PROJECT_RESOURCE_RESPONSE;
    //   this.router.navigate(["/" + UserRouteNames.UserHome]);
  }
  ngAfterContentInit() {
  }
}
