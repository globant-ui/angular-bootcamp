import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { MarsPhotosService } from '../services/mars-photos.service';
import { PhotoService } from '../services/photo.service';

import { Rover } from '../models/rover';
import { Photo } from '../models/photo';
import { Camera } from '../models/camera';

@Component({
   selector: 'app-rovers-day',
   templateUrl: './rovers-day.component.html',
   styleUrls: ['./rovers-day.component.css']
})
export class RoversDayComponent implements OnInit, OnDestroy {
   title: string;
   rovers: Rover[];
   photo: Photo;
   photoSubscription: Subscription;
   paramSubscription: Subscription;
   paramDetector: any;
   error: any;


   constructor(private marsPhotosService: MarsPhotosService, private photoService: PhotoService, private activatedRoute: ActivatedRoute ) {}

   ngOnInit() {
      this.paramSubscription = this.activatedRoute.params.subscribe(params => this.paramDetector = params['photo']);
      if(this.paramDetector === undefined){
         this.title = "Image of the day";
         this.generateImage();
      } else{
         this.photoSubscription = this.photoService.getPhoto().subscribe(photo => {
            this.title = "Image Detail";
            if(photo){               
               this.photo = photo;
            }
         });
      }

   }

   generateImage(){      
      this.marsPhotosService.getRovers().subscribe(roversArray => {
         this.rovers = roversArray['rovers'];
         let randomRoverIndex: number = Math.floor(Math.random() * (this.rovers.length));
         let roverName: string = this.rovers[randomRoverIndex].name;
         this.getRandomPhoto(roverName);
      }, error => this.error = error);
   }

   private getRandomPhoto(roverName:string){      
      this.marsPhotosService.getLatestPhotosFromRover(roverName).subscribe(randomPhotoArray => {
         let latestPhotosFromRover: Photo[] = randomPhotoArray['latest_photos'];
         let randomPhotoIndex: number = Math.floor(Math.random() * (latestPhotosFromRover.length-1));  
         this.photo = latestPhotosFromRover[randomPhotoIndex];
      },error => this.error = error);
   }

   ngOnDestroy(){
      if(this.photoSubscription)
         this.photoSubscription.unsubscribe();

   }


}