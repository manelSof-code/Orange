import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import * as tableData from '../post-offer/smart-table';
import { OffersService } from '../service/offers.service';
import { offers } from '../Model/offers';
@Component({
  selector: 'app-post-offer',
  templateUrl: './post-offer.component.html',
  styleUrls: ['./post-offer.component.css']
})
export class PostOfferComponent implements OnInit{
  Offers :offers[]
  source: LocalDataSource;
  constructor(private service:OffersService) {
     // this.source = new LocalDataSource(tableData.data); // create the source                                       
  }
  ngOnInit() {
    this.service.getOffers().subscribe((data: offers[]) => {
      this.Offers = data;
      this.source = new LocalDataSource(this.Offers);
    });
  }
  settings = tableData.settings;
  
  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }
}

