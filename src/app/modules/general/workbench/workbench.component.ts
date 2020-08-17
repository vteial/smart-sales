import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import Swal from 'sweetalert2';
import { LocalStorage } from 'ngx-webstorage';
import { BaseComponent } from '../../../base.component';

export class UserDto {

  userId: string;

  password: string;

  constructor() {  }

}

@Component({
  selector: 'app-workbench',
  templateUrl: './workbench.component.html',
  styleUrls: ['./workbench.component.css']
})
export class WorkbenchComponent extends BaseComponent implements OnInit {

  minDate: Date;
  maxDate: Date;

  private baseURL = 'https://api.paymence.com/api';

  model: UserDto = new UserDto();

  @LocalStorage()
  accessToken: string;

  merchants = null;

  constructor(private http: HttpClient) {
    super(); super.viewName = 'Workbench';
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 4);
    this.maxDate.setDate(this.maxDate.getDate() + 10);
  }

  ngOnInit(): void {
    this.model.userId = 'alifaziz ';
    this.model.password = 'A123456*';
    // this.accessToken = localStorage.getItem('accessToken');
  }

  alertViaCall(): void {
    Swal.fire('Info!', 'Sweet Alert Works!', 'info');
  }

  onSubmit(form: NgForm): void {
    // console.log('Your form data  : ', form.value);
    console.log('Your form model : ', this.model);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    const httpParams = new HttpParams()
      .set('username', this.model.userId)
      .set('password', this.model.password);
    this.http.post(this.baseURL + '/auth/signin', httpParams, httpOptions).subscribe(
      (response: any) => {
        console.log(response);
        this.accessToken = response.accessToken;
        // localStorage.setItem('accessToken', this.accessToken);
      },
      (error) => console.log(error)
    );
  }

  refresh(): void {
    if (!this.accessToken) {
      console.log('access token is missing. sign in and try...');
    }
    const httpOptions = {
      headers: new HttpHeaders({ 'x-access-token': this.accessToken })
    };
    this.http.get(this.baseURL + '/merchant/current/list', httpOptions).subscribe(
      (res: any) => {
      console.log(res);
      this.merchants = res.merchants;
    },
      (error) => console.log(error)
    );
  }
}
