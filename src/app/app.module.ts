import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { ProjectService } from './personal-projects/project.service';
import { HomeLinksService } from './home/homeLinks.service';
import { ResumeComponent } from './resume/resume.component';
import { ExperienceComponent } from './experience/experience.component';
import { ReadingListComponent } from './reading-list/reading-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExperienceService } from './experience/experience.service';
import { ExperienceDetailComponent } from './experience/experience-detail/experience-detail.component';
import { ReadingList } from './reading-list/reading-list.service';
import { ProjectDetailsComponent } from './personal-projects/project-details/project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalProjectsComponent,
    HomeComponent,
    ResumeComponent,
    ExperienceComponent,
    ReadingListComponent,
    ExperienceDetailComponent,
    ProjectDetailsComponent, 
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
