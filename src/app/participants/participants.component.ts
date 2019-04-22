import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import * as tableData from '../participants/smart-data-table';
import { ParticipantService } from '../service/participant.service';
import { Participant } from '../Model/Participant';
@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  Participants: Participant[];
  source: LocalDataSource;
  constructor(private service :ParticipantService) {
     // create the source                                       
  }
  ngOnInit() {
    this.service.getParticipant().subscribe((data: Participant[]) => {
      this.Participants = data;
      this.source = new LocalDataSource(this.Participants);
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
