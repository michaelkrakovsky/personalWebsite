import { Component, OnInit } from '@angular/core';
import { ExperienceService } from './experience.service';
import { ExperienceTemplate } from './experience.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'], 
})
export class ExperienceComponent implements OnInit {
  
  allXp: ExperienceTemplate[];
    
  constructor(private expService: ExperienceService, 
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.allXp = this.expService.getXp();
    console.log(this.activatedRoute)
  } 

}
