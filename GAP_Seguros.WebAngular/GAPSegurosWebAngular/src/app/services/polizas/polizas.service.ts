import { Injectable } from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import {AuthServiceService} from '../auth/auth-service.service';
import { Router } from '@angular/router';

@Injectable()
export class PolizasService {
  url = "https://gapsegurosservicios20190226095841.azurewebsites.net/api/seguros";

  constructor(private http: Http,
              private _authService: AuthServiceService,
              private _router: Router) { }

  getPolizas() {
    let headers = this._authService.getHeaders();
    if(headers) {
      // let options = new RequestOptions()
      return this.http.get(this.url, {headers});
    }
  }

  addPoliza(poliza) {
    let headers = this._authService.getHeaders();
    if(headers) {
      let body = poliza;
      return this.http.post(this.url, body, {headers});
    }
  }

  editPoliza(poliza) {
    let headers = this._authService.getHeaders();
    if(headers) {
      let body = poliza;
      return this.http.post(`this.url/${poliza.IdPoliza}`, body, {headers});
    }
  }
}
