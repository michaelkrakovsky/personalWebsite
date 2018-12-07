import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../experience.service';
import { ExperienceTemplate } from '../experience.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css']
})
export class ExperienceDetailComponent implements OnInit {

  private xp: ExperienceTemplate;
  private paramsSubscription: Subscription;
  private id: number;

  constructor(private route: ActivatedRoute, 
              private xpService: ExperienceService) { }  // This gives access to the currently loaded route

  ngOnInit() {
    this.id = this.route.snapshot.params['id'],
    this.xp = this.xpService.getOneProject(this.id);
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.xp = this.xpService.getOneProject(this.id);
        }
      );
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
