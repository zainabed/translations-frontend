import {Component , OnInit, HostBinding} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

import {Project} from '../model/project';
import {ProjectService} from '../model/project.service';

@Component({
    selector: "project-list-component",
    templateUrl: './projects-list.html',
})
export class ProjectListComponent implements OnInit {

    projects: Project[];
    dataSource: MatTableDataSource<Project>;
    displayedColumns = [ 'name', 'description'];
    @HostBinding('class.flexBox') flex: boolean = false;

    constructor(private projectService: ProjectService) {

    }

    ngOnInit(): void {
        this.flex = true;
        this.findAllProjects();
        
    }

    findAllProjects() {
        this.projectService.getAll().subscribe((projects: Project[])=> {
            this.projects = projects;
            this.dataSource = new MatTableDataSource(this.projects)
            console.log(this.projects);
        });
    }
}