import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ResumeComponent } from './resume/resume.component';
import { ReadingListComponent } from './reading-list/reading-list.component';
import { ExperienceDetailComponent } from './experience/experience-detail/experience-detail.component';
import { ProjectDetailsComponent } from './personal-projects/project-details/project-details.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: PersonalProjectsComponent, children: [
    { path: ':id', component: ProjectDetailsComponent }
  ] },
  { path: 'experience', component: ExperienceComponent, children: [
    { path: ':id', component: ExperienceDetailComponent }
  ] }, 
  { path: 'resume', component: ResumeComponent }, 
  { path: 'recommended_books', component: ReadingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],       // Export Router Module Once Configured
  exports: [RouterModule]
})
export class AppRoutingModule {

}