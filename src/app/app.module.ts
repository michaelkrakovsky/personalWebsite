import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { HomeComponent } from './home/home.component';
import { ProjectListLeft } from './personal-projects/project-list-left/project-list-left.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { ProjectService } from './personal-projects/project.service';
import { PredictingBaseballStrategyComponent } from './personal-projects/project-list-left/predicting-baseball-strategy/predicting-baseball-strategy.component';
import { ProjectRouterComponent } from './personal-projects/project-list-left/project-router/project-router.component';
import { IcoSuccessComponent } from './personal-projects/project-list-left/ico-success/ico-success.component';
import { PersonalWebsiteComponent } from './personal-projects/project-list-left/personal-website/personal-website.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalProjectsComponent,
    HomeComponent,
    ProjectListLeft,
    PredictingBaseballStrategyComponent,
    ProjectRouterComponent,
    IcoSuccessComponent,
    PersonalWebsiteComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
