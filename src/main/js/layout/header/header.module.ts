import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../../lib/material/mareial.module"
import { HeaderComponent } from './header.component';


@NgModule({
    imports: [
        MaterialModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent
    ],
    providers: []
})
export class HeaderModule {

}