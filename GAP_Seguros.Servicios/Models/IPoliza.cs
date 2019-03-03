﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GAP_Seguros.Servicios.Models
{
    public interface IPoliza
    {
        int IdPoliza { get; set; }
        string Nombre { get; set; }
        string Descripcion { get; set; }
        Nullable<System.DateTime> FechaInicio { get; set; }
        Nullable<byte> Periodo { get; set; }
        Nullable<decimal> Precio { get; set; }
        string IdTipoRiesgo { get; set; }
    }
}
