import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Rover } from '../models/Rover';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoverService {
  private apiKey: string = environment.apiKey;
  private baseUrl: string = "https://api.nasa.gov/mars-photos/api/v1/rovers";


  constructor(private http: HttpClient) { }

  public getRovers(): Observable<Rover[]> {
    return this.http.get<Rover[]>(`${this.baseUrl}?api_key=${this.apiKey}`)
  }

  public getRover(name: string): Observable<Rover> {
    return this.http.get<Rover>(`${this.baseUrl}/${name}?api_key=${this.apiKey}`)
  }
}
