import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import * as tableData from '../offers/smart-data-table';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
})
export class OffersComponent   {
  source: LocalDataSource;
  constructor() {
      this.source = new LocalDataSource(tableData.data); // create the source                                       
  }
  settings = tableData.settings;
  
}
