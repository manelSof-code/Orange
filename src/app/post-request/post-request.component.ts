import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import * as tableData from '../post-request/smart-table';

@Component({
  selector: 'app-post-request',
  templateUrl: './post-request.component.html',
  styleUrls: ['./post-request.component.css']
})
export class PostRequestComponent  {

  source: LocalDataSource;
  constructor() {
      this.source = new LocalDataSource(tableData.data); // create the source                                       
  }
  settings = tableData.settings;
  

}
