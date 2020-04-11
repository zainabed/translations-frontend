import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BottomSheetComponent } from './bottomsheet.component';
import { BottomSheetService } from './bottomsheet.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports:[
        CommonModule,
        RouterModule
    ],
    declarations: [
        BottomSheetComponent
    ],
    providers: [
        BottomSheetService
    ],
    exports: [
        BottomSheetComponent
    ]
})
export class BottomSheetModule {

}