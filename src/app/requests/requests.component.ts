import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import * as tableData from '../requests/smart-table-data-request';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  Requests: Request[];

  constructor(private tservice: RequestService) { }

  ngOnInit() {
    this
      .tservice
      .getRequest()
      .subscribe((data: Request[]) => {
        this.Requests= data;
    });
  }

}
  
