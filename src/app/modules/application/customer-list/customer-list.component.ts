import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../../base.component';
import {AppService} from '../../service/app.service';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent extends BaseComponent implements OnInit {

  users = [];

  constructor(private appService: AppService, private userApiService: UserService) {
    super(); super.viewName = 'Customers';
  }

  ngOnInit(): void {
    this.userApiService.get().subscribe((data: any[]) => {
      console.log(data);
      this.users = data;
    });
  }

}
