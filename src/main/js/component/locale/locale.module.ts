// Core Modules
import { NgModule } from "@angular/core";
import { LocaleRquireModule } from './locale.require.module';
import { Router, RouterModule } from '@angular/router';


// Locale Component and Services
import { LocaleComponent, LocaleListComponent, LocaleFormComponent, LocaleForm } from "./locale.core";
import { LocaleRoutes } from "./locale.route";

@NgModule({
    imports: [
        LocaleRquireModule,
        RouterModule.forChild(LocaleRoutes)
    ],
    declarations: [
        LocaleComponent,
        LocaleListComponent,
        LocaleFormComponent
    ],
    providers: [LocaleForm]
})
export class LocaleModule {

}
