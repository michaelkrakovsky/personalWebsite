import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-ico-success',
  templateUrl: './ico-success.component.html',
  styleUrls: ['./ico-success.component.css']
})
export class IcoSuccessComponent implements OnInit {

  currentProject: Project;

  constructor(private activatedRoute: ActivatedRoute, 
              private projectService: ProjectService) { }

  ngOnInit() {          
      // An attempt to maintain some modulitity by referencing its own path
   this.currentProject = this.projectService.getOneProject(+this.activatedRoute.snapshot.routeConfig.path); 
  }

}
