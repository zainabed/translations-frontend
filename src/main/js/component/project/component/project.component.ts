import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Project } from '../model/project';
import { ProjectService } from '../model/project.service';

@Component({
    selector: "project-component",
    templateUrl: './projects.html',
    host: {
        class: "row center-center"
    }
})
export class ProjectComponent {


}