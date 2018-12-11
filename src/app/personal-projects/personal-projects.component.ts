import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from './project.model';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.css']
})
export class PersonalProjectsComponent {
  projects: Project[];

  constructor(private projectService: ProjectService, 
              private activatedRoute: ActivatedRoute, 
              private router: Router) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
}
