import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Farm } from '../models/Farm';
import { Owner } from '../models/Owner';
import { FarmService } from '../services/farm.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  farm = {} as Farm;
  farms: Farm[] ;
 
  
  owner= {} as Owner;
  owners: Farm[] ;
  owner_id: any;

  constructor(private farmService: FarmService) {}

  getFarms() {
    this.farmService.list().subscribe((farms: Farm[]) => {
      this.farms = farms;
    });
  }

  saveFarm(form: NgForm) {
    if (this.owner_id) {
      this.farmService.saveFarm(this.farm).subscribe(() => {
        this.cleanForm(form);
      });
    }
    
}
cleanForm(form: NgForm) {
  this.getFarms();
  form.resetForm();
  this.farm = {} as Farm;
}
}