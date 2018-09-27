import { MarsPhotosService } from './../services/mars-photos.service';
import { Component, OnInit } from '@angular/core';
import { Rover } from '../models/rover';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rovers: Rover[];
  error: any;

  constructor(private marsPhotos: MarsPhotosService) { }

  ngOnInit() {
    this.getRovers();
  }

  getRovers() {
    this.marsPhotos.getRovers().subscribe(roversArray => { 
      this.rovers = roversArray['rovers'];
    },
    error => this.error = error);
  }

}
