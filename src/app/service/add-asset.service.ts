import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Asset } from '../Model/Asset';
@Injectable({
  providedIn: 'root'
})
export class AddAssetService  {
  private assets: Asset [];
  apiLinkget = '';
  apiLinkadd ='' ;
  constructor(
    private http: HttpClient
  ) {}
  getAsset() {
    return this
    .http
    .get(`${this.apiLinkget}`)
}
addAsset (asset: Asset) {
  return this.http.post<Asset>(this.apiLinkadd,asset);
 }

}