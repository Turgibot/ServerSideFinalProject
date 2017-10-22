using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ClassLibrary;



namespace ServerSideFinalProject.Controllers
{
    public class UserController : ApiController
    {
        // GET api/<controller>
        
        public string Get()
        {
            
            return "";
        }

        // GET api/user/username/pass
        [HttpGet]
        [Route("api/user/{username}/{pass}")]
        public bool GetLoginValidation(string username, string pass)
        {
            //need to call User.LoginValidate(username,pass) -- NOT WORKING - WHY?
          


            return true;

        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}