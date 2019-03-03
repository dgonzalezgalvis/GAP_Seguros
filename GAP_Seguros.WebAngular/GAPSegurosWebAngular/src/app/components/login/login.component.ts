import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../../services/auth-service.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  constructor(private _authService: AuthServiceService) { }

  ngOnInit() {
  }

  login() {
    this._authService.login(this.username, this.password).map(res=>{
      console.log(res);
    }).subscribe();
  }

}
