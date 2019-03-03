import { Injectable } from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthServiceService {
  url = "https://gapsegurosservicios20190226095841.azurewebsites.net/recuperartoken";
  // body = {grant_type:'password',username: 'admin', password: '123'};
  // body = new URLSearchParams();

  constructor(private http: Http) { 

  }

  login(username, password) {
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let body = `username=${username}&password=${password}&grant_type=password`;
    return this.http.post(this.url, body, { headers });
  }

}
