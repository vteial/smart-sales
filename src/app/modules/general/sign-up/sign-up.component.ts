import { Component, OnInit } from '@angular/core';
import {AppService} from '../../service/app.service';
import {BaseComponent} from '../../../base.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent extends BaseComponent implements OnInit {

  constructor(private appService: AppService) {
    super(); super.viewName = 'Sign Up';
  }

  ngOnInit(): void {
  }

}
