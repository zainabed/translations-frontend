// Core Modules
import { NgModule } from "@angular/core";
import { LocaleRquireModule } from './locale.require.module';
import { Router, RouterModule } from '@angular/router';


// Locale Component and Services
import { LocaleComponent, LocaleListComponent, LocaleFormComponent, ImportUriDialogComponent, LocaleForm } from "./locale.core";
import { LocaleRoutes } from "./locale.route";

@NgModule({
    imports: [
        LocaleRquireModule,
        RouterModule.forChild(LocaleRoutes)
    ],
    declarations: [
        ImportUriDialogComponent,
        LocaleComponent,
        LocaleListComponent,
        LocaleFormComponent
    ],
    providers: [LocaleForm],
    exports: [ImportUriDialogComponent],
    entryComponents: [ImportUriDialogComponent]
})
export class LocaleModule {

}
