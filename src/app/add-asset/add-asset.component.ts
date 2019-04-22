import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import * as tableData from '../add-asset/smart-table-data';
import { AddAssetService } from '../service/add-asset.service';
import { Asset } from '../Model/Asset';
@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css'],
})
export class AddAssetComponent implements  OnInit {
  private addAssetService :AddAssetService
  source: LocalDataSource;
  Assets :Asset[] ;
  constructor(protected service :AddAssetService) {              
  }
  ngOnInit() {
    this.service.getAsset().subscribe((data: Asset[]) => {
      this.Assets = data;
      this.source = new LocalDataSource(this.Assets);
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
      this.service.addAsset(event.newData);
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }
}
  


