using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary
{
    public partial class Lesson
    {
   
        public Lesson GetLessonById(string lesson_id)
        {
            myGymDBConnection db = new myGymDBConnection();
            Lesson l = db.Lessons.Single(x => x.lesson_id.ToLower() == lesson_id.ToLower());
            if ((l != null))
                return l; //  means that we found this particual lesson


            return null; //  means that we didn't found this particual lesson -- might be not exist !
        }
        public List<Lesson> GetAllLessons()
        {
            try
            {
                myGymDBConnection db = new myGymDBConnection();
                return db.Lessons.ToList();
            }
            catch(Exception e)
            {
                throw e;
            }
        }

        public bool AddLesson(Lesson new_lesson)
        {
            try
            {
                myGymDBConnection db = new myGymDBConnection();
                db.Lessons.Add(new_lesson);
                var new_lines = db.SaveChanges();
                if (new_lines == 0)
                    return false;
            }
            catch (Exception e)
            {
                throw e;
            }

            return true; // means that a new lesson is added successfuly to the database.
        }



        public bool UpdateLesson(Lesson updated_lesson)
        {
            try
            {
                //myGymDBConnection db = new myGymDBConnection();
                //db.Entry(updated_lesson).State = System.Data.Entity.EntityState.Modified;
                //var new_lines = db.SaveChanges();
                //if (new_lines == 0)
                //    return false;


                myGymDBConnection db = new myGymDBConnection();
                Lesson lesson = db.Lessons.Single(x => x.lesson_id.ToLower() == updated_lesson.lesson_id.ToLower());
           //     lesson.lesson_id = updated_lesson.lesson_id;
                lesson.lesson_name = updated_lesson.lesson_name;
                lesson.lesson_days = updated_lesson.lesson_days;
                lesson.lesson_start_time = updated_lesson.lesson_start_time;
                lesson.lesson_duration = updated_lesson.lesson_duration;
                lesson.capacity = updated_lesson.capacity;
                lesson.instructor_name = updated_lesson.instructor_name;
                lesson.training_type = updated_lesson.training_type;
                lesson.gear = updated_lesson.gear;

                var new_lines = db.SaveChanges();
                if (new_lines == 0)
                    return false;
            }

            catch (Exception e)
            {
                throw e;
            }

            return true; // means that the lesson is updated successfuly in the database.
        }



        public List<Lesson> getLessonsByLessonName(string lesson_name)
        {
            try
            {
                myGymDBConnection db = new myGymDBConnection();
                return db.Lessons.Where(x => x.lesson_name == lesson_name).ToList();
            }
            catch (Exception e)
            {
                throw e;
            }

        }
    }





}

