import { Component, OnInit } from '@angular/core';
import {ApiService} from '../@shared/api.service';
import {BaseComponent} from '../@shared/base.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent extends BaseComponent implements OnInit {

  constructor(private appService: ApiService) {
    super();
    super.viewName = 'Settings';
  }

  ngOnInit(): void {
  }

}
