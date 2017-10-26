using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ClassLibrary;

namespace GymWebApp.Controllers
{
    public class UserInLessonController : ApiController
    {
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/userinlesson/5
        [HttpGet]
        [Route("api/userinlesson/{user_id}")]
        public List<UserInLesson> Get(string user_id)
        {

            return new UserInLesson().GetUserInLessonByUserId(user_id);
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