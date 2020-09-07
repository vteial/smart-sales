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

  fetchStaticFieldConfig(key: string): Observable<any> {
    return this.httpClient.get( 'assets/data/' + key + '.json');
  }

  fetchExistingFieldConfig(key: string): Observable<any> {
    return this.httpClient.get(this.apiPrefix + '/field-config/' + key,
      {headers: new HttpHeaders({'x-token': this.sessionUser.token})});
  }

  saveFieldConfig(id: string, payLoad: any): Observable<any> {
    return this.httpClient.post(this.apiPrefix + '/field-config/' + id,
      payLoad, {headers: new HttpHeaders({'x-token': this.sessionUser.token})});
  }

  // testimonials

  fetchTestimonials(): Observable<any> {
    return this.httpClient.get(this.apiPrefix + '/testimonials',
      {headers: new HttpHeaders({'x-token': this.sessionUser.token})});
  }

  saveTestimonial(id: string, payLoad: any): Observable<any> {
    return this.httpClient.post(this.apiPrefix + '/testimonial/' + id,
      payLoad, {headers: new HttpHeaders({'x-token': this.sessionUser.token})});
  }

  // company-info

  fetchCompanyInfo(): Observable<any> {
    return this.httpClient.get(this.apiPrefix + '/company-info',
      {headers: new HttpHeaders({'x-token': this.sessionUser.token})});
  }

  saveCompanyInfo(payLoad: any): Observable<any> {
    return this.httpClient.post(this.apiPrefix + '/company-info',
      payLoad, {headers: new HttpHeaders({'x-token': this.sessionUser.token})});
  }

  // contacts

  fetchContacts(): Observable<any> {
    return this.httpClient.get(this.apiPrefix + '/contacts',
      {headers: new HttpHeaders({'x-token': this.sessionUser.token})});
  }

}

