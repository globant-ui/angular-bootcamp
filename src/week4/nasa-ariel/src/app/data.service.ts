import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
//import { RootObject } from './info/RootObject'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }
  pack = {}
 // private new_pack = new BehaviorSubject<RootObject>(null); //user
  //the_pack$ = this.new_pack.asObservable(); //cast

  url: string = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM';
  //url :string = 'http://localhost:4200/dataj/data.json';

  //pack : RootObject


  getData() {


    // Implementacion 1
    /*console.log("Get data")
    return this.http
      .get(this.url).pipe(
        map(res => {
          return res.json();
          //return dataPack.map((dataPacket) => new Object(dataPacket));
        })
        */

    // Implementacion 2
    /*return this.http
      .get(this.url).pipe(
        map((response:Response) => {
          return response.json()
        }))
        }

   // return this.pack
    /*
    //this.new_pack.next(this.http.get<RootObject>('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM'))       
    console.log(this.url)
    console.log(this.http.get<RootObject>(this.url))
    this.new_pack.next(this.http.get(this.url))
    console.log("returned")
    return this.http.get<RootObject>(this.url)
    //return (this.http.get<RootObject>('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM'))
    */
  }



}
