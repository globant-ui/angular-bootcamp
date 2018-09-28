import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private photo = new BehaviorSubject<Photo>(null);

  constructor() {}

  getPhoto(): Observable<Photo> {
    return this.photo.asObservable();
  }

  setPhoto(photo: Photo) {
    this.photo.next(photo);
  }
}
