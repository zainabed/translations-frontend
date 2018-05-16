import { Component, OnInit ,AfterContentInit } from '@angular/core';
import { environment } from "../../environments/environment";
import { ActivatedRoute, Router } from "@angular/router";

import { AppResourceData } from "./app.resource.data";
import { UserRouteNames } from "./component/user/user.route";

import {ResourceMockData} from "./lib/http/mock/resource.mock.data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {
  title = 'app';
  constructor(private resourceData: AppResourceData,
    private route: ActivatedRoute,
    private router: Router,
    private mockData: ResourceMockData
  ) {

  }

  ngOnInit(){
    this.resourceData.resource = this.route.snapshot.data.projectResource;
 //   this.resourceData.resource = this.mockData.PROJECT_RESOURCE_RESPONSE;
 //   this.router.navigate(["/" + UserRouteNames.UserHome]);
  }
  ngAfterContentInit() {
  
  }
}
