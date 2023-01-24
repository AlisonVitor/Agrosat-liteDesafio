import { Component, ViewChild, OnInit } from '@angular/core';
import { BasemapComponent } from './basemap/basemap.component';
import { Farm } from './models/Farm';
import { FarmService } from './services/farm.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild('map') map!: BasemapComponent

}
