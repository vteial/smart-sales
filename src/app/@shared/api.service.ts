import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LocalStorage} from 'ngx-webstorage';
import {environment} from '../../environments/environment';
import {UserDto} from '../@model/dto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiPrefix = environment.baseApiPrefix;

  private httpHeaderJson = new HttpHeaders({'Content-Type': 'application/json'});

  @LocalStorage()
  sessionUser: any;

  constructor(private httpClient: HttpClient) {
  }

  processAndSetSessionUser(model: any): void {
    this.sessionUser = model;
  }

  signIn(model: UserDto): Observable<any> {
    return this.httpClient.post(this.apiPrefix + '/login', model.asRequestModel());
  }

  // currentUser(): Observable<any> {
  //   return this.httpClient.get(this.apiPrefix + '/user/current',
  //     {headers: new HttpHeaders({'x-access-token': this.sessionUser.accessToken})});
  // }

  signOut(): void {
    this.httpClient.get(this.apiPrefix + '/logout',
      {headers: new HttpHeaders({'x-token': this.sessionUser.accessToken})})
      .subscribe((data: any[]) => {
        console.log(data);
      });
    this.sessionUser = null;
  }

  // field-config

  fetchFieldConfig(key: string): Observable<any> {
    return this.httpClient.get(this.apiPrefix + '/field-config/' + key,
      {headers: new HttpHeaders({'x-token': this.sessionUser.accessToken})});
  }

  saveFieldConfig(key: string): Observable<any> {
    return this.httpClient.post(this.apiPrefix + '/field-config/' + key,
      {headers: new HttpHeaders({'x-token': this.sessionUser.accessToken})});
  }

}

