using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GAP_Seguros.Entidades.Entidades;
using serv = GAP_Seguros.Servicios.Models;

namespace GAP_Seguros.Servicios.Controllers
{
    [Route("api/seguros")]
    public class SegurosController : ApiController
    {
        private Poliza polizaRepo = new Poliza();
        // GET api/seguros
        [Authorize]
        public List<serv.Poliza> Get()
        {
            //return new string[] { "Seguro1", "Seguro2" };
            var polizaReturn = new List<serv.Poliza>();
            foreach (var poliza in polizaRepo.ObtenerPolizas())
            {
                polizaReturn.Add(new serv.Poliza(poliza));
            }
            return polizaReturn;
        }

        // GET api/seguros/5
        [Authorize]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/seguros
        [Authorize]
        public void Post([FromBody]Poliza poliza)
        {
            polizaRepo.AgregarPoliza(poliza);
        }

        // PUT api/seguros/5
        [Authorize]
        [Route("api/seguros/{id}")]
        public void Put([FromBody]Poliza poliza)
        {
            polizaRepo.EditarPoliza(poliza);
        }

        // DELETE api/seguros/5
        [Authorize]
        [Route("api/seguros/{id}")]
        public void Delete(int id)
        {
            polizaRepo.EliminarPoliza(id);
        }
    }
}