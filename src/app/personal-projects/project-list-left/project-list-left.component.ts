import { Component, OnInit, Input } from '@angular/core';

import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list-left',
  templateUrl: './project-list-left.component.html',
  styleUrls: ['./project-list-left.component.css']
})
export class ProjectListLeft implements OnInit {
  
  projects: Project[];

  constructor(private projectService: ProjectService, 
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
}