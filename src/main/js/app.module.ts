import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularHalModule } from 'angular4-hal';
import { ExternalConfigurationService } from "./lib/external.configuration.service";
import { ProjectModule } from './component/project/project.module';
import { ProjectRouteNames } from './component/project/project.route';
import { HeaderModule } from './layout/header/header.module';
import { HeaderComponent } from './layout/header/header.component';

import {UserModule} from "./component/user/user.module";

import { AppComponent } from './app.component';
import {UserFormComponent} from "./component/user/component/user.form.component";


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularHalModule.forRoot(),
    ProjectModule,
    HeaderModule,
    UserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/' + ProjectRouteNames.projectHome, pathMatch: 'full' },
      { path: '', component: HeaderComponent, outlet: 'toolbar' }
    ],
      { enableTracing: false }),
  ],
  exports: [
    FlexLayoutModule
  ],
  providers: [
    { provide: 'ExternalConfigurationService', useClass: ExternalConfigurationService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
