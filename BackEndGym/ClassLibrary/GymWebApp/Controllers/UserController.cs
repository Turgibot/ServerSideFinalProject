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

        }

        // POST api/user
        public HttpResponseMessage Post([FromBody]User new_user)
        {
            bool succeed = new User().addUser(new_user); // Holds true if the new user added successfuly to the database.
            if (succeed)
                return Request.CreateResponse(HttpStatusCode.OK, new_user.first_name);

            return Request.CreateResponse(HttpStatusCode.NotFound, "");

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





