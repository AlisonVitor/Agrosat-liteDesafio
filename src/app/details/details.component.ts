import { Component, OnInit } from '@angular/core';
import { Farm } from '../models/Farm';
import { FarmService } from '../services/farm.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
  
})
export class DetailsComponent implements OnInit {
  
  farm = {} as Farm;
  farms: Farm[] ;
  
  constructor(private farmService: FarmService) {}


  ngOnInit() {
    this.getFarms();
  }

  getFarms() {
    this.farmService.list().subscribe((farms: Farm[]) => {
      this.farms = farms;
    });
  }


}
