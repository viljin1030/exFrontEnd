import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ControlSidebarComponent } from './layout/control-sidebar/control-sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavigationSidebarComponent } from './layout/navigation-sidebar/navigation-sidebar.component';
import { ContentHeaderComponent } from './layout/content-header/content-header.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {ComponentsHelper} from "ng2-bootstrap";
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ControlSidebarComponent,
    HeaderComponent,
    NavigationSidebarComponent,
    ContentHeaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
      ComponentsHelper
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }



