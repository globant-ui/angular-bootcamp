import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { Rover } from '../models/rover';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class MarsPhotosService {
  private APIURL = `https://api.nasa.gov/mars-photos/api/v1/rovers`;
  private APIKEY = 'aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM';
  private cacheRovers: Observable<Rover[]>;

  constructor(private http: HttpClient) { }

  getRovers(): Observable<Rover[]> {
    if (this.cacheRovers) {
      return this.cacheRovers;
    } else {
      const roversURL = `${this.APIURL}?api_key=${this.APIKEY}`;
      const request = this.http.get<Rover[]>(roversURL).pipe(
        catchError(this.handleError)
      );
      this.cacheRovers = request;
      return request;
    }
  }

  getCameraPhotos(rover: string, camera: string): Observable<Photo[]> {
    const sol = 1500;
    const cameraPhotosURL = `${this.APIURL}/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${this.APIKEY}`;
    return this.http.get<Photo[]>(cameraPhotosURL).pipe(
      catchError(this.handleError)
    );
  }

  getLatestPhotos(rover: string): Observable<Photo[]> {
    const photoURL = `${this.APIURL}/${rover}/latest_photos?api_key=${this.APIKEY}`;
    return this.http.get<Photo[]>(photoURL).pipe(
      catchError(this.handleError)
    );
  }

  private handleError() {
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }

}
