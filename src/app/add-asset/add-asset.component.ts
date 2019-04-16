import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import * as tableData from '../add-asset/smart-table-data';
@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})
export class AddAssetComponent  {

  source: LocalDataSource;
  constructor() {
      this.source = new LocalDataSource(tableData.data); // create the source                                       
  }
  settings = tableData.settings;
  
}

