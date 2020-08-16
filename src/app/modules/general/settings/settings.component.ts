import { Component, OnInit } from '@angular/core';
import {AppService} from '../../service/app.service';
import {BaseComponent} from '../../../base.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent extends BaseComponent implements OnInit {

  constructor(private appService: AppService) {
    super(); super.viewName = 'Settings';
  }

  ngOnInit(): void {
  }

}
