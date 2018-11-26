import { Component, OnInit } from '@angular/core';
import { MarsPhotosService } from '../services/mars-photos.service';

import { Rover } from '../models/rover';

@Component({
   selector: 'app-rovers-gallery',
   templateUrl: './rovers-gallery.component.html',
   styleUrls: ['./rovers-gallery.component.css']
})
export class RoversGalleryComponent implements OnInit {
   rovers: Rover[];
   error: any;

   constructor(private marsPhotosService: MarsPhotosService) { }

   ngOnInit() {
      this.getRovers();
   }

   getRovers(): void {
      this.marsPhotosService.getRovers().subscribe(roversArray => {this.rovers = roversArray['rovers']}, error => this.error = error);
   }




}
