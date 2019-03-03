using System;

namespace GAP_Seguros.Servicios.Models
{
    public class Poliza: IPoliza
    {
        public int IdPoliza { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public Nullable<System.DateTime> FechaInicio { get; set; }
        public Nullable<byte> Periodo { get; set; }
        public Nullable<decimal> Precio { get; set; }
        public string IdTipoRiesgo { get; set; }

        public Poliza(IPoliza poliza)
        {
            this.IdPoliza = poliza.IdPoliza;
            this.Nombre = poliza.Nombre;
            this.Descripcion = poliza.Descripcion;
            this.FechaInicio = poliza.FechaInicio;
            this.Periodo = poliza.Periodo;
            this.Precio = poliza.Precio;
            this.IdTipoRiesgo = poliza.IdTipoRiesgo;
        }

        public Poliza(Entidades.Interfaces.IPoliza poliza)
        {
            this.IdPoliza = poliza.IdPoliza;
            this.Nombre = poliza.Nombre;
            this.Descripcion = poliza.Descripcion;
            this.FechaInicio = poliza.FechaInicio;
            this.Periodo = poliza.Periodo;
            this.Precio = poliza.Precio;
            this.IdTipoRiesgo = poliza.IdTipoRiesgo;
        }
    }
}