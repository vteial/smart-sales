import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {AppService} from '../../service/app.service';
import {UserService} from '../../service/user.service';
import {BaseComponent} from '../../../base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {

  constructor(private appService: AppService) {
    super(); super.viewName = 'Home';
  }

  ngOnInit(): void {
  }

}
