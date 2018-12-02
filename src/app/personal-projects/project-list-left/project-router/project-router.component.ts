import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../project.model';

@Component({
  selector: 'app-project-router',
  templateUrl: './project-router.component.html',
  styleUrls: ['./project-router.component.css']
})
export class ProjectRouterComponent implements OnInit {
  @Input() project: Project;
  @Input() index: number;
  
  constructor() { }

  ngOnInit() {
  }

}
