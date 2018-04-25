import {Component , OnInit} from '@angular/core';
import {ProjectService} from './project.service';
import {MatTableDataSource} from '@angular/material';
import {Project} from './project';

@Component({
    selector: "project-component",
    templateUrl: './projects.html',
})
export class ProjectComponent implements OnInit {

    projects: Project[];
    dataSource: MatTableDataSource<Project>;
    displayedColumns = [ 'name', 'description'];

    constructor(private projectService: ProjectService) {

    }

    ngOnInit(): void {
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