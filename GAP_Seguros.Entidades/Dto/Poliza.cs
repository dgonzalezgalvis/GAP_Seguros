using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using datos = GAP_Seguros.Persistencia;
using GAP_Seguros.Persistencia.Servicios;
using GAP_Seguros.Entidades.Interfaces;

namespace GAP_Seguros.Entidades.Entidades
{
    public class Poliza: IPoliza
    {
        private IGenericRepository<datos.Poliza> _poliza;

        public int IdPoliza { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public Nullable<System.DateTime> FechaInicio { get; set; }
        public Nullable<byte> Periodo { get; set; }
        public Nullable<decimal> Precio { get; set; }
        public Nullable<byte> IdTipoRiesgo { get; set; }

        public Poliza()
        {
            _poliza = new GenericRepository<datos.Poliza>(new datos.Entities());
        }

        public Poliza(IPoliza polizaContext)
        {
            this.IdPoliza = polizaContext.IdPoliza;
            this.Nombre = polizaContext.Nombre;
            this.Descripcion = polizaContext.Descripcion;
            this.FechaInicio = polizaContext.FechaInicio;
            this.Periodo = polizaContext.Periodo;
            this.Precio = polizaContext.Precio;
            this.IdTipoRiesgo = polizaContext.IdTipoRiesgo;
        }

        public Poliza(datos.Poliza polizaContext)
        {
            this.IdPoliza = polizaContext.IdPoliza;
            this.Nombre = polizaContext.Nombre;
            this.Descripcion = polizaContext.Descripcion;
            this.FechaInicio = polizaContext.FechaInicio;
            this.Periodo = polizaContext.Periodo;
            this.Precio = polizaContext.Precio;
            this.IdTipoRiesgo = polizaContext.IdTipoRiesgo;
        }

        public void AgregarPoliza(IPoliza poliza)
        {
            var tempPoliza = new datos.Poliza();
            tempPoliza.Nombre = poliza.Nombre;
            tempPoliza.Descripcion = poliza.Descripcion;
            tempPoliza.FechaInicio = poliza.FechaInicio;
            tempPoliza.Periodo = poliza.Periodo;
            tempPoliza.Precio = poliza.Precio;
            tempPoliza.IdTipoRiesgo = poliza.IdTipoRiesgo;

            _poliza.Add(tempPoliza);
            _poliza.Save();
        }

        public List<IPoliza> ObtenerPolizas()
        {
            var polizasReturn = new List<IPoliza>();
            foreach(var poliza in _poliza.GetAll().ToList())
            {
                polizasReturn.Add(new Poliza(poliza));
            }
            return polizasReturn;
        }

        public void EditarPoliza(IPoliza poliza)
        {
            var tempPoliza = new datos.Poliza();
            tempPoliza.IdPoliza = poliza.IdPoliza;
            tempPoliza.Nombre = poliza.Nombre;
            tempPoliza.Descripcion = poliza.Descripcion;
            tempPoliza.FechaInicio = poliza.FechaInicio;
            tempPoliza.Periodo = poliza.Periodo;
            tempPoliza.Precio = poliza.Precio;
            tempPoliza.IdTipoRiesgo = poliza.IdTipoRiesgo;

            _poliza.Edit(tempPoliza);
            _poliza.Save();
        }

        public void EliminarPoliza(int id)
        {
            var polizaBorrar = _poliza.GetAll().ToList().Find(poliza => poliza.IdPoliza == id);
            _poliza.Delete(polizaBorrar);
            _poliza.Save();
        }
    }
}