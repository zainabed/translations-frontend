// Core Modules
import { NgModule } from "@angular/core";
import { KeyRequireModule } from './key.require.module';
import { Router, RouterModule } from '@angular/router';


// key Component and Services
import { KeyComponent, KeyListComponent, KeyFormComponent, KeyForm, KeyService } from "./key.core";
import { KeyRoutes } from "./key.route";

@NgModule({
    imports: [
        KeyRequireModule,
        RouterModule.forChild(KeyRoutes)
    ],
    declarations: [
        KeyComponent,
        KeyListComponent,
        KeyFormComponent
    ],
    providers: [KeyForm, KeyService]
})
export class KeyModule {

}
