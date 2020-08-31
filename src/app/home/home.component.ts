import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../@shared/base.component';
import {ApiService} from '../@shared/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {

  constructor(private appService: ApiService) {
    super();
    super.viewName = 'Home';
  }

  ngOnInit(): void {
  }

}
