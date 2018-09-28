import { Component, OnInit, Input } from '@angular/core';
import { Rover } from '../../../models/Rover';
import { Photo } from '../../../models/Photo';
import { PhotosService } from '../../../services/photos.service';
import { Camera } from '../../../models/Camera';

@Component({
  selector: 'app-rover-view',
  templateUrl: './rover-view.component.html',
  styleUrls: ['./rover-view.component.css']
})
export class RoverViewComponent implements OnInit {
  @Input() rover: Rover;
  public photos: Photo[] = [];
  private photosLong: Photo[] = [];
  public counter: number = 0;
  public selectedCamera: Camera;
  public showSpinner: boolean = true;

  constructor(private photoSvc: PhotosService) { }

  ngOnInit() {
    this.selectedCamera = this.rover.cameras[0];
    this.photoSvc.getPhotosByCamera(this.rover.name, this.selectedCamera.name)
      .subscribe(photos => {
        this.photos = photos;

        this.showSpinner = false
      });
  }

  onChange($event) {
    this.showSpinner = true;
    this.photoSvc.getPhotosByCamera(this.rover.name, this.selectedCamera.name)
      .subscribe(photos => {
        this.photos = photos;
        this.showSpinner = false
      });
  }

}
