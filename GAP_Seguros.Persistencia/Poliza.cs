//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace GAP_Seguros.Persistencia
{
    using System;
    using System.Collections.Generic;
    
    public partial class Poliza
    {
        public int IdPoliza { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public Nullable<System.DateTime> FechaInicio { get; set; }
        public Nullable<byte> Periodo { get; set; }
        public Nullable<decimal> Precio { get; set; }
        public Nullable<byte> IdTipoRiesgo { get; set; }
    }
}
