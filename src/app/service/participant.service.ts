import { Injectable } from '@angular/core';
import { Participant } from '../Model/Participant';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  private Participants: Participant[];  
  apiLink = '';
  constructor(
    private http: HttpClient
  ) {}
  getParticipant() {
    return this
    .http
    .get(`${this.apiLink}`)
}
}
