import { Component, OnInit } from '@angular/core';
import {AppService} from '../../service/app.service';
import {BaseComponent} from '../../../base.component';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent extends BaseComponent implements OnInit {

  constructor(private appService: AppService) {
    super(); super.viewName = 'Not Found';
  }

  ngOnInit(): void {
  }

}
