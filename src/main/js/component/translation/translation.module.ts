// Core Modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslationRequireModule } from './translation.require.module';
import { Router, RouterModule } from '@angular/router';


// translation Component and Services
import { TranslationComponent, TranslationListComponent, TranslationFormComponent, TranslationForm } from "./translation.core";
import { TranslationRoutes } from "./translation.route";

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA], 
    imports: [
        TranslationRequireModule,
        RouterModule.forChild(TranslationRoutes)
    ],
    declarations: [
        TranslationComponent,
        TranslationListComponent,
        TranslationFormComponent
    ],
    providers: [TranslationForm]
})
export class TranslationModule {

}
