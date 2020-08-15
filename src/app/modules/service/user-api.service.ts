import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private API_PREFIX = "https://jsonplaceholder.typicode.com";

  private RESOURCE = this.API_PREFIX + "/users";

  constructor(private httpClient: HttpClient) { }

  public get(){
    return this.httpClient.get(this.RESOURCE);
  }
}
