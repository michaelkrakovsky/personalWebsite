import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-personal-website',
  templateUrl: './personal-website.component.html',
  styleUrls: ['./personal-website.component.css']
})
export class PersonalWebsiteComponent implements OnInit {

  currentProject: Project;

  constructor(private activatedRoute: ActivatedRoute, 
              private projectService: ProjectService) { }

  ngOnInit() {          
    // An attempt to maintain some modulitity by referencing its own path
 this.currentProject = this.projectService.getOneProject(+this.activatedRoute.snapshot.routeConfig.path); 
}

}
