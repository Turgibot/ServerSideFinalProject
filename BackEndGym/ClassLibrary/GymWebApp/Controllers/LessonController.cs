using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ClassLibrary;

namespace GymWebApp.Controllers
{
    public class LessonController : ApiController
    {
        // GET api/lesson
        public List<Lesson> Get()
        {
            return new Lesson().GetAllLessons();
        }

        // GET api/lesson/5
        public Lesson Get(string id)
        {
            Lesson l = new Lesson().GetLessonById(id);
            return l;
        }

        // POST api/lesson
        public HttpResponseMessage Post([FromBody]Lesson new_lesson)
        {
            bool succeed = new Lesson().AddLesson(new_lesson); // Holds true if the new lesson added successfuly to the database.
            if (succeed)
                return Request.CreateResponse(HttpStatusCode.OK, new_lesson.lesson_name);

            return Request.CreateResponse(HttpStatusCode.NotFound, "");
        }

        // PUT api/lesson/update
        [Route("api/lesson/update/")]
        public HttpResponseMessage Put([FromBody]Lesson updated_lesson)
        {
            bool succeed = new Lesson().UpdateLesson(updated_lesson); // Holds true if the lesson updated successfuly in the database.
            if (succeed)
                return Request.CreateResponse(HttpStatusCode.OK, updated_lesson.lesson_name);

            return Request.CreateResponse(HttpStatusCode.NotFound, "");
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}