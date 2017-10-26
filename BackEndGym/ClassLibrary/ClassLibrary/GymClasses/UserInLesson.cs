using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary
{
    public partial class UserInLesson
    {

        public List<UserInLesson> GetUserInLessonByUserId(string user_id)
        {
            try
            {
                int id = Int32.Parse(user_id);
                myGymDBConnection db = new myGymDBConnection();
                return db.UserInLessons.Where(x => x.user_id == id).ToList();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<UserInLesson> GetUserInLessonByLessonId(string lesson_id)
        {
            try
            {
                myGymDBConnection db = new myGymDBConnection();
                return db.UserInLessons.Where(x => x.lesson_id.ToLower() == lesson_id.ToLower()).ToList();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<UserInLesson> GetUserInLessonByLessonDay(string lesson_day)
        {
            try
            {
                myGymDBConnection db = new myGymDBConnection();
                return db.UserInLessons.Where(x => x.lesson_day.ToLower() == lesson_day.ToLower()).ToList();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

       

    }
}

