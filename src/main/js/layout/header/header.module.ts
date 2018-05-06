import {NgModule} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {HeaderComponent} from './header.component';


@NgModule({
    imports: [
        MatToolbarModule
    ],
    declarations: [
        HeaderComponent
    ],
    providers: []
})
export class HeaderModule {

}