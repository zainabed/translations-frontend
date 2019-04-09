import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../../lib/material/mareial.module"
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { SecurityModule } from "@zainabed/security";
import { BrowserModule } from '@angular/platform-browser';
import { UserDetailsService } from '@zainabed/shield/lib/core';


@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        RouterModule,
        CommonModule,
        SecurityModule
    ],
    declarations: [
        HeaderComponent
    ],
    providers: []
})
export class HeaderModule {

}