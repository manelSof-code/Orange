import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import * as tableData from '../participants/smart-data-table';
@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent  {

  source: LocalDataSource;
  constructor() {
      this.source = new LocalDataSource(tableData.data); // create the source                                       
  }
  settings = tableData.settings;
  
}
