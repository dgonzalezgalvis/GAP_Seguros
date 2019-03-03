using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using datos = GAP_Seguros.Persistencia;
using GAP_Seguros.Persistencia.Servicios;

namespace GAP_Seguros.Entidades.Entidades
{
    public class Poliza
    {
        private IGenericRepository<datos.Poliza> _poliza;

        public Poliza()
        {
            _poliza = new GenericRepository<datos.Poliza>(new datos.Entities());
        }

        public void AgregarPoliza()
        {
            var tempPoliza = new datos.Poliza();
            tempPoliza.Nombre = "aaa";
            _poliza.Add(tempPoliza);
        }
    }
}