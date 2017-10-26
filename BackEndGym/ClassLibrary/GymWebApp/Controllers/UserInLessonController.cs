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
        [HttpGet]
        [Route("api/userinlesson/{lesson_id}/{lesson_day}")]
        public int Get(string lesson_id, string lesson_day)
        {
            return new UserInLesson().GetNumOfUsersInLesson(lesson_id, lesson_day);
        }

        // GET api/userinlesson/5
        [HttpGet]
        [Route("api/userinlesson/{user_id}")]
        public List<UserInLesson> Get(string user_id)
        {

            return new UserInLesson().GetUserInLessonByUserId(user_id);
        }


        // POST api/userinlesson
        [HttpPost]
        [Route("api/userinlesson/add")]
        public HttpResponseMessage Post([FromBody]List<UserInLesson> new_uil)
        {
            bool succeed = new UserInLesson().AddUIL(new_uil); // Holds true if the new uil added successfuly to the database.
            if (succeed)
                return Request.CreateResponse(HttpStatusCode.OK, "");

            return Request.CreateResponse(HttpStatusCode.NotFound, "");
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete]
        [Route("api/userinlesson/")]
        public bool Delete([FromBody]List<UserInLesson> uil)
        {
            bool succeed = new UserInLesson().DeleteUIL(uil); // Holds true if the new uil deleted successfuly from the database.
            if (succeed)
                return true;

            return false;

            //return true if it deleted successfuly
        }
    }
}