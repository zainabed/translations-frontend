import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Injector } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

import { ResourcesService } from "../../../lib/http/resources.service";
import { ResourceService } from "../../../lib/http/resource.service";
import { AppResourceData } from "../../../app.resource.data";
import { ResourceMockData } from "../../../lib/http/mock/resource.mock.data";

import { ProjectListComponent } from "./project.list.component";
import { ProjectRquiredModule } from "../project.required.module";

describe("BDD for ProjectListComponent.\n", () => {
    let component: ProjectListComponent;
    let fixture: ComponentFixture<ProjectListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ProjectRquiredModule],
            declarations: [ProjectListComponent],
            providers: [
                { provide: ResourceService, useValue: jasmine.createSpyObj("ResourceService", ["get", "patch", "delete"]) },
                { provide: AppResourceData, useValue: jasmine.createSpyObj("AppResourceData", ["getResourceListUrlFor"]) },
                { provide: ResourcesService, useValue: jasmine.createSpyObj("ResourcesService", ["get"]) },
                { provide: Router, useValue: jasmine.createSpyObj("Router", ["navigate"]) },
                ResourceMockData
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectListComponent);
        component = fixture.componentInstance;
    });

    it("Component should have been defined.\n", () => {
        expect(component).toBeDefined();
    });

    it("Component path name should match.\n", () => {
        expect(component.getComponentPath()).toEqual("projects");
    });
});