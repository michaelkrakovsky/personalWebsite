import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { ProjectService } from './personal-projects/project.service';
import { PredictingBaseballStrategyComponent } from './personal-projects/predicting-baseball-strategy/predicting-baseball-strategy.component';
import { ProjectRouterComponent } from './personal-projects/project-router/project-router.component';
import { IcoSuccessComponent } from './personal-projects/ico-success/ico-success.component';
import { PersonalWebsiteComponent } from './personal-projects/personal-website/personal-website.component';
import { DefaultProjectComponent } from './personal-projects/default-project/default-project.component';
import { HomeLinksService } from './home/homeLinks.service';
import { ResumeComponent } from './resume/resume.component';
import { ExperienceComponent } from './experience/experience.component';
import { ReadingListComponent } from './reading-list/reading-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExperienceService } from './experience/experience.service';
import { ExperienceDetailComponent } from './experience/experience-detail/experience-detail.component';
import { ReadingList } from './reading-list/reading-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalProjectsComponent,
    HomeComponent,
    PredictingBaseballStrategyComponent,
    ProjectRouterComponent,
    IcoSuccessComponent,
    PersonalWebsiteComponent,
    DefaultProjectComponent,
    ResumeComponent,
    ExperienceComponent,
    ReadingListComponent,
    ExperienceDetailComponent, 
  ],

  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpModule,
    BrowserAnimationsModule, 
  ],
  providers: [
    ProjectService, 
    HomeLinksService, 
    ExperienceService, 
    ReadingList],
  bootstrap: [AppComponent]
})
export class AppModule { }
