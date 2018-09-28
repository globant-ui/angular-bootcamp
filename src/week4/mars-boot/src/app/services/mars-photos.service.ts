import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Rover } from '../models/rover';
import { Photo } from '../models/photo';

@Injectable({
   providedIn: 'root'
})
export class MarsPhotosService {
   private apiKey = 'aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM';
   private apiURL = 'https://api.nasa.gov/mars-photos/api/v1';
   private cache : Observable<Rover[]>;

   constructor(private http: HttpClient) { }

   getRovers(): Observable<Rover[]> {
      const roversURL = `${this.apiURL}/rovers?api_key=${this.apiKey}`;
      if(this.cache)
         return this.cache;               
      let request = this.http.get<Rover[]>(roversURL).pipe(
         catchError(this.handleError)
      );
      this.cache = request;
      return request;
   }

   getPhotosFromCamera(roverName: string, cameraName: string, sol: number): Observable<Photo[]> {
      const photosURL = `${this.apiURL}/rovers/${roverName}/photos?sol=${sol}&camera=${cameraName}&api_key=${this.apiKey}`;
      return this.http.get<Photo[]>(photosURL).pipe(
         catchError(this.handleError)
      );
   }

   getLatestPhotosFromRover(roverName: string): Observable<Photo[]>{
      const latestPhotosURL = `${this.apiURL}/rovers/${roverName}/latest_photos?&api_key=${this.apiKey}`;
      return this.http.get<Photo[]>(latestPhotosURL).pipe(
         catchError(this.handleError)
      );
   }

   private handleError(error: HttpErrorResponse) {
      //depending on the error, it would have to be handle
      console.log(error.message);
      return throwError('Something bad happened; please try again later.');
   }

}

