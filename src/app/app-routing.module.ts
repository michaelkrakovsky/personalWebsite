import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { HomeComponent } from './home/home.component';
import { PredictingBaseballStrategyComponent } from './personal-projects//predicting-baseball-strategy/predicting-baseball-strategy.component';
import { IcoSuccessComponent } from './personal-projects/ico-success/ico-success.component';
import { PersonalWebsiteComponent } from './personal-projects/personal-website/personal-website.component';
import { DefaultProjectComponent } from './personal-projects/default-project/default-project.component';
import { ExperienceComponent } from './experience/experience.component';
import { ResumeComponent } from './resume/resume.component';
import { ReadingListComponent } from './reading-list/reading-list.component';
import { ExperienceDetailComponent } from './experience/experience-detail/experience-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: PersonalProjectsComponent, children: [
    { path: '', component: DefaultProjectComponent },
    { path: '0', component: PredictingBaseballStrategyComponent }, 
    { path: '1', component: IcoSuccessComponent }, 
    { path: '2', component: PersonalWebsiteComponent }
  ] },
  { path: 'experience', component: ExperienceComponent, children: [
    { path: ':id', component: ExperienceDetailComponent }
  ] }, 
  { path: 'resume', component: ResumeComponent }, 
  { path: 'recommended_books', component: ReadingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],       // Export Router Module Once Configured
  exports: [RouterModule]
})
export class AppRoutingModule {

}