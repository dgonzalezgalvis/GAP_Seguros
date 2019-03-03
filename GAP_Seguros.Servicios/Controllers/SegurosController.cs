using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GAP_Seguros.Entidades.Entidades;

namespace GAP_Seguros.Servicios.Controllers
{
    [Route("api/seguros")]
    public class SegurosController : ApiController
    {
        // GET api/seguros
        [Authorize]
        public IEnumerable<string> Get()
        {
            return new string[] { "Seguro1", "Seguro2" };
        }

        // GET api/seguros/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/seguros
        public void Post([FromBody]string value)
        {
            var tempPoliza = new Poliza();
            tempPoliza.AgregarPoliza();
        }

        // PUT api/seguros/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/seguros/5
        public void Delete(int id)
        {
        }
    }
}