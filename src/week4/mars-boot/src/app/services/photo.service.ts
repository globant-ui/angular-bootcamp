import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Photo } from '../models/photo';

@Injectable({
   providedIn: 'root'
})
export class PhotoService {

   private subject = new BehaviorSubject<Photo>(null);

   setPhoto(photo: Photo){
      this.subject.next(photo);
   }

   getPhoto(): Observable<Photo>{
      return this.subject.asObservable();      
   }

}