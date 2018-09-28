import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-navbar',
   templateUrl: './navbar.component.html',
   styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   title = "The Red Planet Rovers";
   galleryTitle = "Image Gallery";
   dayTitle = "Image of the Day";
   

   constructor() { }

   ngOnInit() {
   }

}
