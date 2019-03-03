import { Component, OnInit } from '@angular/core';
import {PolizasService} from '../../services/polizas/polizas.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-seguros',
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.css']
})
export class SegurosComponent implements OnInit {
  polizasResponse: any;
  seguros = [];
  constructor(private _polizas: PolizasService,
              private _router: Router) { }

  ngOnInit() {
    this._polizas.getPolizas().map(res => this.mapPolizas(res)).subscribe();
  }

  mapPolizas(response) {
    this.polizasResponse = response;
    this.seguros = JSON.parse(this.polizasResponse._body);
    console.log(this.seguros);
  }

  addPoliza() {
    this._router.navigate(['/seguro']);
  }

  editPoliza(polizaId) {
    this._router.navigate(['/seguro/'+polizaId]);
  }

  removePoliza() {

  }

}
