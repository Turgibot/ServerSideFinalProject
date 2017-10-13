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

        // GET api/user/5
     
        [Route("api/user/{username}/{pass}")]
        public bool Get(string username, string pass)
        {
            myGymDBConnection db = new myGymDBConnection();
            User u = db.Users.Single(x => x.user_name.ToLower() == username);

            if ((u != null) && (u.password == pass))
                return true; // true means that the validation is succeed!


            return false; // false means that the validation is failed!

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