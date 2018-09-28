import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title: string;
  homeTitle: string;
  detailTitle: string;

  constructor() { }

  ngOnInit() {
    this.title = 'The Red Planet Rovers';
    this.homeTitle = 'Image Gallery';
    this.detailTitle = 'Image of the Day';
  }

}
