import { Component, Input } from '@angular/core';
import { Farm } from '../models/Farm';
import { FarmService } from '../services/farm.service';

@Component({
  selector: 'app-dashboard',
  template: `<button routerLink="farm">Cadastrar</button> 
  
  <p  routerLink='details' *ngFor="let farm of farms">{{farm.name}}  ` , 

})
export class DashboardComponent {

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
