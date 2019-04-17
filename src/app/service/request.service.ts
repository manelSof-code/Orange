import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private Requests: Request[];  
  apiLink = '';
  constructor(
    private http: HttpClient
  ) {}
  getRequest() {
    return this
    .http
    .get(`${this.apiLink}/Requests`)
}
}
