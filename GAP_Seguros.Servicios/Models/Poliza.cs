using System;

namespace GAP_Seguros.Servicios.Models
{
    public class Poliza: IPoliza
    {
        public int idPoliza { get; set; }
        public string nombre { get; set; }
        public string descripcion { get; set; }
        public Nullable<System.DateTime> fechaInicio { get; set; }
        public Nullable<byte> periodo { get; set; }
        public Nullable<decimal> precio { get; set; }
        public Nullable<byte> idTipoRiesgo { get; set; }

        public Poliza(IPoliza poliza)
        {
            this.idPoliza = poliza.idPoliza;
            this.nombre = poliza.nombre;
            this.descripcion = poliza.descripcion;
            this.fechaInicio = poliza.fechaInicio;
            this.periodo = poliza.periodo;
            this.precio = poliza.precio;
            this.idTipoRiesgo = poliza.idTipoRiesgo;
        }

        public Poliza(Entidades.Interfaces.IPoliza poliza)
        {
            this.idPoliza = poliza.IdPoliza;
            this.nombre = poliza.Nombre;
            this.descripcion = poliza.Descripcion;
            this.fechaInicio = poliza.FechaInicio;
            this.periodo = poliza.Periodo;
            this.precio = poliza.Precio;
            this.idTipoRiesgo = poliza.IdTipoRiesgo;
        }
    }
}