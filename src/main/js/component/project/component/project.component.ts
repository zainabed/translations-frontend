import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Project } from '../model/project';
import { ProjectService } from '../model/project.service';
//import { RouteSecurityEvent } from '@app/lib/security/route.security.event';

@Component({
    selector: "project-component",
    templateUrl: './projects.html',
    host: {
        class: "row center-center"
    }
})
export class ProjectComponent {

  /*constructor(event: RouteSecurityEvent) {
    event.subscribe({
        error: (value) =>{
            console.log("route error:" + value);
        }
    })
  }*/
}