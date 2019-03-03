import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seguro',
  templateUrl: './seguro.component.html',
  styleUrls: ['./seguro.component.css']
})
export class SeguroComponent implements OnInit {
  action: string;
  poliza: any;
  polizaId: number;
  date: Date = new Date();
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MM-yyyy',
        defaultOpen: false
    }
  constructor(private _router: Router) { }

  ngOnInit() {
    if(this.polizaId) {

    } else {
      this.action = 'Agregar';
      this.initPolizaEmptyFields();
    }
  }

  initPolizaEmptyFields() {
    this.poliza = {
      nombre: '',
      descriopcion: '',
      fechaInicio: this.date,
      periodo: 12,
      precio: 0,
      tipoRiesgo: 1
    };
  }

  back() {
    this._router.navigate(['/seguros']);
  }

  editPoliza() {
    if(this.polizaId) {
      
    } else {
      this.action = 'Agregar';
      this.initPolizaEmptyFields();
    }
  }

}
