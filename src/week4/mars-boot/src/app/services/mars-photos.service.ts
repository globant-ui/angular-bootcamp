import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Rover } from '../models/rover';
import { Photo } from '../models/photo';

@Injectable({
   providedIn: 'root'
})
export class MarsPhotosService {
   private apiKey = 'aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM';
   private apiURL = 'https://api.nasa.gov/mars-photos/api/v1';

   constructor(private http: HttpClient) { }

   getRovers(): Observable<Rover[]> {
      const roversURL = `${this.apiURL}/rovers?api_key=${this.apiKey}`;
      return this.http.get<Rover[]>(roversURL);
   }

   getPhotosFromCamera(roverName: string, cameraName: string, sol: number): Observable<Photo[]> {
      const photosURL = `${this.apiURL}/rovers/${roverName}/photos?sol=${sol}&camera=${cameraName}&api_key=${this.apiKey}`;
      return this.http.get<Photo[]>(photosURL);
   }

   getLatestPhotosFromRover(roverName: string): Observable<Photo[]>{
      const latestPhotosURL = `${this.apiURL}/rovers/${roverName}/latest_photos?&api_key=${this.apiKey}`;
      return this.http.get<Photo[]>(latestPhotosURL);
   }

}

