import { Component, OnInit, Input } from '@angular/core';
import { MarsPhotosService } from '../services/mars-photos.service';

import { Rover } from '../models/rover';
import { Photo } from '../models/photo';
import { Camera } from '../models/camera';

@Component({
   selector: 'app-rover',
   templateUrl: './rover.component.html',
   styleUrls: ['./rover.component.css']
})
export class RoverComponent implements OnInit {

   @Input() rover: Rover;
   photos: Photo[];
   hasPhotos: boolean;
   actualCameraFullName: string;
   actualCameraShortName: string;

   constructor(private photoService: MarsPhotosService) { 
   }

   ngOnInit() { 
      this.actualCameraShortName = this.rover.cameras[0].name; 
      this.actualCameraFullName = this.rover.cameras[0].full_name;
      this.getPhotosFromCamera(this.actualCameraShortName);
   }

   getPhotosFromCamera(cameraName: string) {
      this.photoService.getPhotosFromCamera(this.rover.name, cameraName, this.rover.max_sol).subscribe(photosArray => {
         this.photos = photosArray['photos'].slice(0,4);
         this.hasPhotos = this.photos.length > 0 ? true : false;  
      });
      for (let camera of this.rover.cameras) {
         if(camera.name === cameraName)
            this.actualCameraFullName = camera.full_name;
      }

   }  


}
