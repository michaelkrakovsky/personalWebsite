import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-router',
  templateUrl: './project-router.component.html',
  styleUrls: ['./project-router.component.css']
})
export class ProjectRouterComponent implements OnInit {
  @Input() project: Project;    // Input the project into the component
  @Input() index: number;       // Input the index number to establish a path
  

  constructor(private activatedRoute: ActivatedRoute, 
              private projectService: ProjectService) { }

  ngOnInit() {        
  }

}
