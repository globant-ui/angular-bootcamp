import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../../../models/Photo';
import { PhotosService } from '../../../services/photos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-thumbnail',
  templateUrl: './photo-thumbnail.component.html',
  styleUrls: ['./photo-thumbnail.component.css']
})
export class PhotoThumbnailComponent implements OnInit {
  @Input() photo: Photo;

  constructor(private photoSvc: PhotosService, private router: Router) { }

  ngOnInit() {
  }

  view() {
    this.photoSvc.setSelectedPhoto(this.photo);
    this.router.navigate(['view-photo'])
  }

}
