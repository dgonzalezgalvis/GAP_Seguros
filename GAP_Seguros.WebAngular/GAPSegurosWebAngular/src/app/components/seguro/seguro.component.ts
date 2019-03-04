import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {PolizasService} from '../../services/polizas/polizas.service';

@Component({
  selector: 'app-seguro',
  templateUrl: './seguro.component.html',
  styleUrls: ['./seguro.component.css']
})
export class SeguroComponent implements OnInit {
  action: string;
  poliza: any;
  polizaId: number;
  errorNombre = false;
  errorDescripcion = false;
  errorFechaInicio = false;
  errorPeriodo = false;
  errorPrecio = false;

  date: Date = new Date();
  settings = {
    bigBanner: true,
    timePicker: false,
    format: 'dd-MM-yyyy',
    defaultOpen: false
  }

  constructor(private _routerparams: ActivatedRoute,
              private _router: Router,
              private _polizas: PolizasService) { }

  ngOnInit() {
    this.polizaId = this._routerparams.snapshot.params['id'];
    if(this.polizaId) {
      this.poliza = this._polizas.tempPolizaEdit;
      this.action = 'Editar';
    } else {
      this.action = 'Agregar';
      this.initPolizaEmptyFields();
    }
  }

  initPolizaEmptyFields() {
    this.poliza = {
      idPoliza: 0,
      nombre: '',
      descripcion: '',
      fechaInicio: this.date,
      periodo: 12,
      precio: 0,
    };
  }

  back() {
    this._router.navigate(['/seguros']);
  }

  validateFields() {
    this.errorNombre = !(this.poliza.nombre && this.poliza.nombre !=='');
    this.errorDescripcion = !(this.poliza.descripcion && this.poliza.descripcion !=='');
    this.errorFechaInicio = !(this.poliza.fechaInicio && this.poliza.fechaInicio !=='');
    this.errorPeriodo = !(this.poliza.periodo && this.poliza.periodo > 0);
    this.errorPrecio = !(this.poliza.precio && this.poliza.precio > 0);
    return !(this.errorNombre || this.errorDescripcion ||
      this.errorFechaInicio || this.errorPeriodo || this.errorPrecio);
  }

  editPoliza() {
    if(this.validateFields()) {
      if(this.polizaId) {
       this._polizas.editPoliza(this.poliza).map(res=>{
        this._router.navigate(['/seguros']);
      }).subscribe();;
    } else {
      this._polizas.addPoliza(this.poliza).map(res=>{
        this._router.navigate(['/seguros']);
      }).subscribe();
    }
    }
  }
}
