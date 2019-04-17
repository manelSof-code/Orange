import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Asset } from '../Model/Asset';
@Injectable({
  providedIn: 'root'
})
export class AddAssetService {
  private assets: Asset [];
  apiLink = 'http://localhost:3000/api/personnes';
  constructor(
    private http: HttpClient
  ) {}
  getAsset() {
    return this
    .http
    .get(`${this.apiLink}`)
}
}