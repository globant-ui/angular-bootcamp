import { Component, OnInit } from '@angular/core';
import { Rover } from '../../../models/Rover';
import { RoverService } from '../../../services/rover.service';

@Component({
  selector: 'app-rover-list',
  templateUrl: './rover-list.component.html',
  styleUrls: ['./rover-list.component.css']
})
export class RoverListComponent implements OnInit {
  public rovers: Rover[];

  constructor(private roverSvc: RoverService) { }

  ngOnInit() {
    this.roverSvc.getRovers().subscribe(rov => this.rovers = rov['rovers']);
  }

}
