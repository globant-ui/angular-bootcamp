import { Component, OnInit } from '@angular/core';
import { Photo } from '../../../models/Photo';
import { PhotosService } from '../../../services/photos.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {
  public photo: Photo;

  constructor(
    private photoSvc: PhotosService, 
    private router: Router, 
    private route: ActivatedRoute
  ) {  }



  ngOnInit() {
    if (this.route.snapshot.paramMap.get('iod')) {
      this.photoSvc.setRandomPhoto();
    }
    this.photoSvc.getSelectedPhoto().subscribe(p => {
      this.photo = p;
      if (!this.photo)
        this.router.navigate(['gallery'])
    })
  }

}
