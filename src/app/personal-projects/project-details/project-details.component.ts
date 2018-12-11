import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  project: Project;
  private paramsSubscription: Subscription;
  private id: number;
    
  constructor(private projectService: ProjectService, 
              private route: ActivatedRoute,) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'],
    this.project = this.projectService.getOneProject(this.id);
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.project = this.projectService.getOneProject(this.id);          // Subscribe and change when a service has been changed
        }
      );
  }
}
