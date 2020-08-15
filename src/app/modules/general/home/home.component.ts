import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { UserApiService } from '../../service/user-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = environment.application.name;

  users = [];

  constructor(private userApiService: UserApiService) { }

  ngOnInit(): void {
    this.userApiService.get().subscribe((data: any[]) => {
      console.log(data);
      this.users = data;
    });
  }

}
