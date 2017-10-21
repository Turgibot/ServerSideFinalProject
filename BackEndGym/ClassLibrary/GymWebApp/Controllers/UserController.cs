using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ClassLibrary;

namespace GymWebApp.Controllers
{
    public class UserController : ApiController
    {
        // GET api/<controller>
        
        public string Get()
        {

            return "";
        }

        // GET api/user/username/pass

        [Route("api/user/{username}/{pass}")]
        public HttpResponseMessage Get(string username, string pass)
        {
            User confirmedUser = new User().validateUser(username, pass);
            if (confirmedUser != null)
                return Request.CreateResponse(HttpStatusCode.OK, confirmedUser.first_name);

            return Request.CreateResponse(HttpStatusCode.NotFound, "");


            //myGymDBConnection db = new myGymDBConnection();
            //User u = db.Users.Single(x => x.user_name.ToLower() == username);
            //if ((u != null) && (u.password == pass))
            //    return true; // true means that the validation is succeed!


            //return false; // false means that the validation is failed!

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





