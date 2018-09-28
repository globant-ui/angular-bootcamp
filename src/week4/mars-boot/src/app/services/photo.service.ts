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


/*
   ----- INFO -----

   The main reason to use Subjects is to multicast. An Observable by default is unicast. Unicasting means that each subscribed observer owns an independent execution of the Observable

   BEHAVIOR SUBJECT
   
   BehaviorSubject is a type of subject, a subject is a special type of observable so you can subscribe to  like any other observable.
   
   Represents a value that changes over time. Observers can subscribe to the subject to receive the last (or initial) value and all subsequent notifications. If you are looking for BehaviorSubject without initial value see Rx.ReplaySubject.

   REPLAY SUBJECT

   Represents an object that is both an observable sequence as well as an observer. Each notification is broadcasted to all subscribed and future observers, subject to buffer trimming policies.
   
   subject.next()
   
   The subject next method is used to send messages to an observable which are then sent to all angular components that are subscribers (a.k.a. observers) of that observable.
   
   asObservable()
   Hides the identity of an observable sequence
   
   
*/
