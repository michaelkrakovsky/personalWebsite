import { Component, OnInit } from '@angular/core';
import { HomeLinksService } from './homeLinks.service';
import { HomeLink } from './homeLink.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeLinks: HomeLink[];

  constructor(private homeLinkService: HomeLinksService) { }

  ngOnInit() {
    this.homeLinks = this.homeLinkService.getProjects()
  }

}
