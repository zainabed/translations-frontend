import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Injector } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpResponse } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { MaterialModule } from "../../../lib/material/mareial.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslationFormComponent } from "./translation.form.component";
import { ExpectFormError } from "../../../lib/spec/helper.methods.spec";
import { ResourceService } from "../../../lib/http/resource.service";
import { ResourcesService } from "../../../lib/http/resources.service";
import { AppResourceData } from "../../../app.resource.data";

import { TranslationForm } from "../form/translation.form";
import { TranslationMockData } from "../mock/mock.data";

describe("BDD test for translationFormComponent.\n", () => {
    let component: TranslationFormComponent;
    let fixture: ComponentFixture<TranslationFormComponent>;
    let router;
    let resourceService;
    let resourcesService;


    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                TranslationFormComponent
            ],
            providers: [
                TranslationForm,
                { provide: ResourceService, useValue: jasmine.createSpyObj("ResourceService", ["get", "patch", "delete"]) },
                { provide: ResourcesService, useValue: jasmine.createSpyObj("ResourcesService", ["post", "get"]) },
                { provide: AppResourceData, useValue: jasmine.createSpyObj("AppResourceData", ["getResourceListUrlFor"]) },
                { provide: Router, useValue: jasmine.createSpyObj("Router", ["navigate"]) },
                { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: function get() { return 1 } } } } },
            ],
            imports: [
                RouterTestingModule,
                MaterialModule,
                ReactiveFormsModule,
                BrowserAnimationsModule
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TranslationFormComponent);
        component = fixture.componentInstance;
        router = fixture.debugElement.injector.get(Router);
        resourcesService = fixture.debugElement.injector.get(ResourcesService);

        resourcesService.get.and.returnValue(Observable.of(TranslationMockData.RESOURCE_RESPONSE));
        resourcesService.post.and.returnValue(Observable.of(TranslationMockData.RESOURCE_RESPONSE));
    });

    it("Component should have been defined.\n", () => {
        expect(component).toBeTruthy();
    });

    it("onPostSuccess method should call navigate method of Router.\n", () => {
        component.onPostSuccess({});
        expect(router.navigate).toHaveBeenCalled();
    });

    it("Post method should call post method of ResourcesService.\n", () => {
        component.post();
        expect(resourcesService.post).toHaveBeenCalledWith(component.apiUrl, component.translationForm.getData());
    });

    describe("Test for name field validation.\n", () => {
        let name: HTMLInputElement;
        let errorMesage: HTMLElement;
        let fieldName = "name";
        let nameFormControl;

        beforeEach(() => {
            name = fixture.debugElement.nativeElement.querySelector("#name");
            nameFormControl = component.translationForm.form.get(fieldName);
        });

        it("Empty name should display error message.\n", () => {
            nameFormControl.setValue("");
            ExpectFormError(name, fixture, "#name-empty-error", false);
        });

        it("Empty name should not display error message.\n", () => {
            nameFormControl.setValue("abcded");
            ExpectFormError(name, fixture, "#name-empty-error", true);
        });

        it("Min length error message should be displayed when name value is less than 5.\n", () => {
            nameFormControl.setValue("abcd");
            ExpectFormError(name, fixture, "#name-less-error", false);

        });

        it("Max length error message should be displayed when name value is more than 20.\n", () => {
            nameFormControl.setValue("123456789012345678901");
            ExpectFormError(name, fixture, "#name-max-error", false);

        });

    });

    describe("Test for code field validation.\n", () => {
        let code: HTMLInputElement;
        let errorMesage: HTMLElement;
        let fieldName = "code";
        let codeFormControl;

        beforeEach(() => {
            code = fixture.debugElement.nativeElement.querySelector("#code");
            codeFormControl = component.translationForm.form.get(fieldName);
        });

        /*it("Empty code should display error message.\n", () => {
            codeFormControl.setValue("");
            ExpectFormError(code, fixture, "#code-empty-error", false);
        });*/

        it("Empty code should not display error message.\n", () => {
            codeFormControl.setValue("sv-SE");
            ExpectFormError(code, fixture, "#code-empty-error", true);
        });

        it("Min length error message should be displayed when code value is less than 5.\n", () => {
            codeFormControl.setValue("1234");
            ExpectFormError(code, fixture, "#code-less-error", false);

        });

        it("Max length error message should be displayed when code value is more than 20.\n", () => {
            codeFormControl.setValue("1234567");
            ExpectFormError(code, fixture, "#code-max-error", false);

        });

    });


});