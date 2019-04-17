import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import * as tableData from '../offers/smart-data-table';
import { offers } from '../Model/offers';
import { OffersService } from '../service/offers.service';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
})
export class OffersComponent   implements OnInit {

  offers: offers[];

  constructor(private tservice: OffersService) { }

  ngOnInit() {
    this
      .tservice
      .getOffers()
      .subscribe((data: offers[]) => {
        this.offers= data;
    });
  }

}
  
