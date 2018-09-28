import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-navbar',
   templateUrl: './navbar.component.html',
   styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   const title = "The Red Planet Rovers";
   const galleryTitle = "Image Gallery";
   const dayTitle = "Image of the Day";
   

   constructor() { }

   ngOnInit() {
   }

}
