import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Project } from '../model/project';
import { ProjectService } from '../model/project.service';
import { HeaderService } from '../../../layout/header/header.service';
import { Autowired } from '@zainabed/tdi/core';
//import { RouteSecurityEvent } from '@app/lib/security/route.security.event';

@Component({
    selector: "project-component",
    templateUrl: './projects.html',
    host: {
        class: "row center-center"
    }
})
export class ProjectComponent {

  @Autowired()
  public headerService: HeaderService;

  constructor(){
    this.headerService.backgroundVisibility = true;
  }

  /*constructor(event: RouteSecurityEvent) {
    event.subscribe({
        error: (value) =>{
            console.log("route error:" + value);
        }
    })
  }*/
}