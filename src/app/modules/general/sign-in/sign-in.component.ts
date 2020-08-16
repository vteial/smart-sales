import { Component, OnInit } from '@angular/core';
import {AppService} from '../../service/app.service';
import {BaseComponent} from '../../../base.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent extends BaseComponent implements OnInit {

  constructor(private appService: AppService) {
    super(); super.viewName = 'Sign In';
  }

  ngOnInit(): void {
  }

}
