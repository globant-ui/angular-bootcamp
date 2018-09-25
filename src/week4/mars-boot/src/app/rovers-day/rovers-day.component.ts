import { Component, OnInit } from '@angular/core';
import { MarsPhotosService } from '../services/mars-photos.service';

import { Rover } from '../models/rover';
import { Photo } from '../models/photo';
import { Camera } from '../models/camera';

@Component({
   selector: 'app-rovers-day',
   templateUrl: './rovers-day.component.html',
   styleUrls: ['./rovers-day.component.css']
})
export class RoversDayComponent implements OnInit {

   rovers: Rover[];
   randomRover: Rover;
   randomCamera: Camera;
   randomImg: string;
   curiosity: string;

   constructor(private photoService: MarsPhotosService) {}

   ngOnInit() {
      this.curiosity = "curiosity";
      this.getRandomPhoto(this.curiosity);
   }


   getRandomPhoto(roverName: string){
      this.photoService.getLatestPhotosFromRover(roverName).subscribe(randomPhotoArray => {
         let latestPhotosFromRover: Photo[] = randomPhotoArray['latest_photos'];
         let randomPhotoIndex: number = Math.floor(Math.random() * (latestPhotosFromRover.length-1));  
         this.randomCamera = latestPhotosFromRover[randomPhotoIndex].camera;
         this.randomImg = latestPhotosFromRover[randomPhotoIndex].img_src;
         this.randomRover = latestPhotosFromRover[randomPhotoIndex].rover;
      });
   }
}