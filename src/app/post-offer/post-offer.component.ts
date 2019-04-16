import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import * as tableData from '../post-offer/smart-table';
@Component({
  selector: 'app-post-offer',
  templateUrl: './post-offer.component.html',
  styleUrls: ['./post-offer.component.css']
})
export class PostOfferComponent {
  source: LocalDataSource;
  constructor() {
      this.source = new LocalDataSource(tableData.data); // create the source                                       
  }
  settings = tableData.settings;
  
}
