import { Component, OnInit } from '@angular/core';
import { ExperienceService } from './experience.service';
import { ExperienceTemplate } from './experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'], 
})
export class ExperienceComponent implements OnInit {
  
  allXp: ExperienceTemplate[];
    
  constructor(private expService: ExperienceService) { }

  ngOnInit() {
    this.allXp = this.expService.getXp();
  } 

}
