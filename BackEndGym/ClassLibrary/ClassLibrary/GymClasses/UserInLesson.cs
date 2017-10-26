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

       

        public bool AddUIL(List<UserInLesson> new_uil)
        {
            try
            {
                myGymDBConnection db = new myGymDBConnection();
                foreach(UserInLesson i in new_uil)
                {
                    db.UserInLessons.Add(i);
                }              
                var new_lines = db.SaveChanges();
                if (new_lines == 0)
                    return false;
            }
            catch (Exception e)
            {
                throw e;
            }

            return true; // means that a new uil is added successfuly to the database.
        }




        public bool DeleteUIL(List<UserInLesson> uil)
        {

            try
            {
                myGymDBConnection db = new myGymDBConnection();
                foreach (UserInLesson i in uil)
                {                 
                    db.Entry(i).State = System.Data.Entity.EntityState.Deleted;
                }
                var new_lines = db.SaveChanges();
                if (new_lines == 0)
                    return false;
            }
            catch (Exception e)
            {
                throw e;
            }

            return true; // means that uil is deleted successfuly from the database.
        }




        private string convertDayNumToLetter(string lesson_day)
        {
            switch(lesson_day)
            {
                case "1":
                    return "א";
                case "2":
                    return "ב";
                case "3":
                    return "ג";
                case "4":
                    return "ד";
                case "5":
                    return "ה";
                case "6":
                    return "ו";
                case "7":
                    return "ש";
            }

            return lesson_day;
        }

        public int GetNumOfUsersInLesson(string lesson_id, string lesson_day)
        {
            lesson_day = convertDayNumToLetter(lesson_day);
            myGymDBConnection db = new myGymDBConnection();
            var filtered_list = db.UserInLessons.Where(x => x.lesson_id.ToLower().Trim() == lesson_id.ToLower().Trim()).ToList();
            return  filtered_list.Where(x => x.lesson_day.ToLower().Trim() == lesson_day.ToLower().Trim()).Count();
        }
    }
}

