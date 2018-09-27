import { Component, OnInit, Input } from '@angular/core';
import { Rover, Camera } from '../models/rover';
import { MarsPhotosService } from '../services/mars-photos.service';
import { Photo } from '../models/photo';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-rover-photos',
  templateUrl: './rover-photos.component.html',
  styleUrls: ['./rover-photos.component.css']
})
export class RoverPhotosComponent implements OnInit {
  @Input() rover: Rover;
  photos: Photo[];
  photosProviden: boolean;
  cameraFullName: string;
  cameraShortName: string;
  error: any;

  constructor(private marsPhotosService: MarsPhotosService, private dataService: DataService) { }

  ngOnInit() {
    if (this.rover.cameras.length > 0) {
      this.getPhotos(this.rover.name, this.rover.cameras[0].name);
    }
  }

  getPhotos(rover: string, camera: string) {
    this.marsPhotosService.getCameraPhotos(rover, camera).subscribe(arrayPhotos => {
      this.photos = arrayPhotos['photos'].slice(0, 4);
      this.photosProviden = this.photos.length > 0;
      this.findCamera(this.rover.cameras, camera);
    },
    error => this.error = error);
  }

  sendPhoto(photo: Photo) {
    this.dataService.setPhoto(photo);
  }

  private findCamera(cameras: Camera[], shortName: string) {
    const cameraObj: Camera = cameras.find(camera => {
      return camera.name === shortName;
    });
    this.cameraFullName = cameraObj.full_name;
    this.cameraShortName = shortName;
  }
  
}
