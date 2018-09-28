import { Component, OnInit, Input } from '@angular/core';
import {Rover, rovers_info,cameras_names } from './rover'

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-rover',
  templateUrl: './rover.component.html',
  styleUrls: ['./rover.component.css']
})
export class RoverComponent implements OnInit {

  @Input() rover_name: string;
  

  actual_rover : Rover ;
  actual_camera : string;


  constructor(  ) { 

  }
  ngOnInit() {
    this.actual_camera=cameras_names['FHAZ']     
    for (let i in rovers_info) {
      if (this.rover_name === rovers_info[i].name){
        this.actual_rover=rovers_info[i]      
      }     
    } 
    
  }
}
