import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../../services/auth/auth-service.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  response: any;
  constructor(private _authService: AuthServiceService,
              private _router: Router) { }

  ngOnInit() {
  }

  login() {
    this._authService.login(this.username, this.password).map(res=>{
      // console.log('aaa', res);
      this.response = res;
      this._authService.token = JSON.parse(this.response._body).access_token;
      
      this._router.navigate(['/seguros']);
    }).subscribe();
  }

}
