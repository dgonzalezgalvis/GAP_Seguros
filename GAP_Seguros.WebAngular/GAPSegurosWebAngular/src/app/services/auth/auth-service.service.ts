import { Injectable } from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthServiceService {
  url = "https://gapsegurosservicios20190226095841.azurewebsites.net/recuperartoken";
  token = '';
  tokenKeySS = 'GAP_Seguros_Token';

  constructor(private http: Http,
              private _router: Router) { 

  }

  setToken(token: string) {
    this.token = token;
    sessionStorage.setItem(this.tokenKeySS, token);
  }

  getToken() {
    return this.token !== ''? this.token : sessionStorage.getItem(this.tokenKeySS);
  }

  login(username, password) {
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let body = `username=${username}&password=${password}&grant_type=password`;
    return this.http.post(this.url, body, { headers });
  }

  getHeaders() {
    if(this.token && this.token !== '') {
       return new Headers({'Authorization': `Bearer ${this.token}`})
    } else {
      this._router.navigate(['/login']);
    }
   
  }

}
