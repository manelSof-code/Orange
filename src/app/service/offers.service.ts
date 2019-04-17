import { Injectable } from '@angular/core';
import { offers } from '../Model/offers';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  private Offers: offers[];
  apiLink = '';
  constructor(
    private http: HttpClient
  ) {}
  getOffers() {
    return this
    .http
    .get(`${this.apiLink}/offers`)
}
}
