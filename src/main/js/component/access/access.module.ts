import { NgModule } from '@angular/core';
import { AccessListComponent } from './access.list.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../lib/material/mareial.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        AccessListComponent
    ],
    declarations: [
        AccessListComponent
    ]
})
export class AccessModule{

}