// Core Modules
import { NgModule } from "@angular/core";
import { LocaleRquireModule } from './locale.require.module';
import { Router, RouterModule } from '@angular/router';


// Locale Component and Services
import { LocaleComponent, LocaleListComponent, LocaleFormComponent, ImportUriDialogComponent, ExportDialogComponent, LocaleForm } from "./locale.core";
import { LocaleRoutes } from "./locale.route";

@NgModule({
    imports: [
        LocaleRquireModule,
        RouterModule.forChild(LocaleRoutes)
    ],
    declarations: [
        ImportUriDialogComponent,
        ExportDialogComponent,
        LocaleComponent,
        LocaleListComponent,
        LocaleFormComponent
    ],
    providers: [LocaleForm],
    exports: [ImportUriDialogComponent, ExportDialogComponent],
    entryComponents: [ImportUriDialogComponent, ExportDialogComponent]
})
export class LocaleModule {

}
