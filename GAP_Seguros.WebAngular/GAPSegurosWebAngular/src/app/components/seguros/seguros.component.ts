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
  polizaToDelete = {};
  cliente = {
    id: '',
    nombre: ''
  };
  dataCliente = false;

  constructor(private _polizas: PolizasService,
              private _router: Router) { }

  ngOnInit() {
    this.bringPolizas();
  }

  bringPolizas() {
    this._polizas.getPolizas().map(res => this.mapPolizas(res)).subscribe();
  }

  mapPolizas(response) {
    this.polizasResponse = response;
    this.seguros = JSON.parse(this.polizasResponse._body);
    this.seguros.forEach((seguro)=>{
      switch(seguro.idTipoRiesgo){
        case 1:
          seguro.tipoRiesgo = 'bajo';
          break;
        case 2:
          seguro.tipoRiesgo = 'medio';
          break;
        case 3:
          seguro.tipoRiesgo = 'medio-alto';
          break;
        case 4:
          seguro.tipoRiesgo = 'alto';
          break;
      }
      seguro.asignada = false;
    })
  }

  addPoliza() {
    this._router.navigate(['/seguro']);
  }

  editPoliza(poliza) {
    this._polizas.tempPolizaEdit = poliza;
    this._router.navigate(['/seguro/'+poliza.polizaId]);
  }

  selectPoliza(poliza) {
    this.polizaToDelete = poliza;
  }

  deletePoliza() {
    this._polizas.deletePoliza(this.polizaToDelete).map(res=>{
        this.bringPolizas();
      }).subscribe();
  }

  validateDataCliente() {
    this.dataCliente =  false;
    if(this.cliente.id !== '' && this.cliente.nombre !== '') {
      this.seguros.forEach((seguro)=>{
        if(seguro.asignada){
          this.dataCliente =  true;
        }
      });
    }
  }

  assignPoliza() {
    this.cliente = {
      id: '',
      nombre: ''
    };
    this.seguros.forEach((seguro)=>{
      seguro.asignada = false;
    });
    this.dataCliente =  false;
  }

}
