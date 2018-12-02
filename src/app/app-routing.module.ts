import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { HomeComponent } from './home/home.component';
import { PredictingBaseballStrategyComponent } from './personal-projects/project-list-left/predicting-baseball-strategy/predicting-baseball-strategy.component';
import { IcoSuccessComponent } from './personal-projects/project-list-left/ico-success/ico-success.component';
import { PersonalWebsiteComponent } from './personal-projects/project-list-left/personal-website/personal-website.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: PersonalProjectsComponent, children: [
    {path: '0', component: PredictingBaseballStrategyComponent}, 
    {path: '1', component: IcoSuccessComponent}, 
    {path: '2', component: PersonalWebsiteComponent}
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],       // Export Router Module Once Configured
  exports: [RouterModule]
})
export class AppRoutingModule {

}