using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GAP_Seguros.Servicios.Models
{
    public interface IPoliza
    {
        int idPoliza { get; set; }
        string nombre { get; set; }
        string descripcion { get; set; }
        Nullable<System.DateTime> fechaInicio { get; set; }
        Nullable<byte> periodo { get; set; }
        Nullable<decimal> precio { get; set; }
        Nullable<byte> idTipoRiesgo { get; set; }
    }
}
