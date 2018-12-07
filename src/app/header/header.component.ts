import { Component } from '@angular/core';
import { HomeLinksService } from '../home/homeLinks.service';
import { HomeLink } from '../home/homeLink.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', 
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  homeLinks: HomeLink[];

  constructor(private homeLinksService: HomeLinksService) {}

  ngOnInit() {
    this.homeLinks = this.homeLinksService.getProjects()
  }
}
