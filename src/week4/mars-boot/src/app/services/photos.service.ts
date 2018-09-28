import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'
import { formatDate } from '@angular/common';
import { Observable, of } from 'rxjs';
import { Photo } from '../models/Photo';
import { RoverService } from './rover.service';
import { Rover } from '../models/Rover';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private apiKey: string = environment.apiKey;
  private baseUrl: string = "https://api.nasa.gov/mars-photos/api/v1/rovers/";

  // I save here the selected photo from the gallery to show in the detailed view
  private selectedPhoto: Photo;


  constructor(private http: HttpClient, private roverSvc: RoverService) { }



  public setRandomPhoto() {

    this.roverSvc.getRovers().subscribe(r => {
      this.getPhotosByRover(r['rovers'][Math.floor(Math.random() * r['rovers'].length)].name).subscribe(photos => {
        this.selectedPhoto = photos['photos'][Math.floor(Math.random() * photos['photos'].length)];
      })
    })
  }

  public getSelectedPhoto(): Observable<Photo> {
    return of(this.selectedPhoto);
  }

  public setSelectedPhoto(photo: Photo) {
    this.selectedPhoto = photo;
  }

  public getPhotosByRover(rover: string, page?: number): Observable<Photo[]> {
    let pageStr = "";
    if (page) {
      pageStr = `&page=${page}`;
    }
    return this.http.get<Photo[]>(`${this.baseUrl}${rover}/photos?sol=1000${pageStr}&api_key=${this.apiKey}`);
  }

  public getPhotosByCamera(rover: string, camera: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}${rover}/photos?sol=1000&camera=${camera}&page=1&api_key=${this.apiKey}`);
  }


}
