import { TestBed, ComponentFixture } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UserFormComponent } from "./user.form.component";
import { Component } from "@angular/core";
import { UserForm } from "../form/user.form";

describe("Unit test for UserFormComponent.\n", () => {
    let component: UserFormComponent;
    let fixture: ComponentFixture<UserFormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [UserFormComponent],
            providers: [UserForm],
            imports: [ReactiveFormsModule, CommonModule,
                MatInputModule, MatButtonModule, MatIconModule,
                MatProgressBarModule, FlexLayoutModule, BrowserAnimationsModule]
        }).compileComponents();;
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserFormComponent);
        component = fixture.componentInstance;
    });

    it("Component should be defined.\n", () => {
        expect(component).toBeDefined();
    });

    describe("Test for username validation.\n", () => {
        let username: HTMLInputElement;
        let errorMesage: HTMLElement;

        beforeEach(() => {
            username = fixture.debugElement.nativeElement.querySelector("#username");

        });

        it("Empty username should display error message.\n", () => {
            username.value = null;
            username.dispatchEvent(new Event("input"));
            fixture.detectChanges();
            errorMesage = fixture.debugElement.nativeElement.querySelector("#username-empty-error");
            expect(errorMesage).toBeTruthy();
        });

        it("Empty username should not display error message.\n", () => {
            username.value = "zainabed";
            username.dispatchEvent(new Event("input"));
            fixture.detectChanges();
            errorMesage = fixture.debugElement.nativeElement.querySelector("#username-empty-error");
            expect(errorMesage).toEqual(null);
        });
    });
});