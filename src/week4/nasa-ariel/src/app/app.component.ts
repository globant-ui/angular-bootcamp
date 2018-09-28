import { Component } from '@angular/core';
import { rovers_info } from './rover/rover'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nasa API Ariel';

  rover_names :string [] = [];

  constructor(){

    for (let i in rovers_info){      
      this.rover_names.push(rovers_info[i].name)
    }   
  }
  ngOnInit(){
   }
}

