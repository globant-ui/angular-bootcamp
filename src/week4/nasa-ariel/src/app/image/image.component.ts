import { Component, OnInit, Input } from '@angular/core';
import { Photo, rovers_info} from '../rover/rover';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() photos_gallery: Photo[];
  @Input() rover_name: string;

  constructor() { }

  ngOnInit() {

    for (let i in rovers_info) {
      if (this.rover_name === rovers_info[i].name){
        this.photos_gallery=rovers_info[i].photos  
      }     
    }      
  }

}
