import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Photo } from '../models/photo';
import { DataService } from './../services/data.service';
import { MarsPhotosService } from './../services/mars-photos.service';
import { Rover } from '../models/rover';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  title: string;
  photo: Photo;
  subscriptionPhoto: Subscription;
  error: any;

  constructor(private marsPhotosService: MarsPhotosService, private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const route: string = params['route'];
      if (route === 'photo') {
        this.title = 'Detail';
        const rover: string = params['rover'];
        const camera: string = params['camera'];
        const id: number = Number(params['id']);
        this.getPhoto(rover, camera, id);
        
      } else {
        this.title = 'Image of the Day';
        this.getRandomPhoto();
      }
    });
  }

  getPhoto(rover: string, camera: string, id: number) {
    this.subscriptionPhoto = this.dataService.getPhoto().subscribe(photo => {
      if (photo) {
        this.photo = photo;
      } else {
        this.marsPhotosService.getCameraPhotos(rover, camera).subscribe(arrayPhotos => {
          this.photo = arrayPhotos['photos'].slice(0, 4).find(photoObj => {
            return photoObj.id === id;
          });
        },
        error => this.error = error);
      }
    });
  }

  getRandomPhoto() {
    this.marsPhotosService.getRovers().subscribe(roversObj => {
      const roversArray: Rover[] = roversObj['rovers'];
      const randomRover: number = Math.floor(Math.random() * (roversArray.length - 1));
      const rover: string = roversArray[randomRover].name;
      this.marsPhotosService.getLatestPhotos(rover).subscribe(arrayPhotos => {
        const latestPhotos: Photo[] = arrayPhotos['latest_photos'];
        const randomIndex: number = Math.floor(Math.random() * (latestPhotos.length - 1));
        this.photo = latestPhotos[randomIndex];
      },
      error => this.error = error);
    },
    error => this.error = error);
  }
  
  ngOnDestroy() {
    if (this.subscriptionPhoto) {
      this.subscriptionPhoto.unsubscribe();
    }
  }

}
