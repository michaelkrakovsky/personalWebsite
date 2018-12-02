import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../project.model';
import { ProjectService } from '../../project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-predicting-baseball-strategy',
  templateUrl: './predicting-baseball-strategy.component.html',
  styleUrls: ['./predicting-baseball-strategy.component.css']
})
export class PredictingBaseballStrategyComponent implements OnInit {
  
  currentProject: Project;

  constructor(private activatedRoute: ActivatedRoute, 
              private projectService:ProjectService) { }

  ngOnInit() {
   this.currentProject = this.projectService.getOneProject(+this.activatedRoute.snapshot.routeConfig.path);
  }

}
