import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularHalModule } from 'angular4-hal';
import { ExternalConfigurationService } from "./lib/external.configuration.service";

import { ProjectRouteNames } from './component/project/project.route';
import { HeaderModule } from './layout/header/header.module';
import { HeaderComponent } from './layout/header/header.component';

import { UserRouteNames } from "./component/user/user.route";
import { UserListComponent } from "./component/user/component/user.list.component";

import { UserModule } from "./component/user/user.module";
import { LocaleModule } from "./component/locale/locale.module";
import { KeyModule } from "./component/key/key.module";
import { ProjectModule } from './component/project/project.module';
import { ResourceModule } from "./lib/http/resource.module";


import { AppComponent } from './app.component';
import { AppResourceData } from "./app.resource.data";
import { AppResourceDataResolve } from "./app.resource.data.resolve";
import { SidebarService } from "./layout/sidebar/sidebar.service";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { SidebarModule } from "./layout/sidebar/sidebar.module";


import { ResourceMockData } from "./lib/http/mock/resource.mock.data";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularHalModule.forRoot(),
    ProjectModule,
    HeaderModule,
    SidebarModule,
    ResourceModule,
    UserModule,
    LocaleModule,
    KeyModule,
    RouterModule.forRoot([
      {
        path: '', component: AppComponent,
        resolve: { "projectResource": AppResourceDataResolve }
      },
      { path: '', component: HeaderComponent, outlet: 'toolbar' },
      { path: '', component: SidebarComponent, outlet: 'sidebar' }
    ],
      { enableTracing: false }),
  ],
  exports: [
    FlexLayoutModule
  ],
  providers: [
    { provide: 'ExternalConfigurationService', useClass: ExternalConfigurationService },
    AppResourceData,
    AppResourceDataResolve,
    SidebarService,
    ResourceMockData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
