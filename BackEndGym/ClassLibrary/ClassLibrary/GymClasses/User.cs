using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary
{
    public partial class User
    {
         public User validateUser(string username, string pass)
        {
            myGymDBConnection db = new myGymDBConnection();
            User u = db.Users.Single(x => x.user_name.ToLower() == username);
            if ((u != null) && (u.password == pass))
                return u; //  means that the validation is succeed!


            return null; //  means that the validation is failed!
        }

        public bool addUser(User new_user)
        {
            try
            {
                myGymDBConnection db = new myGymDBConnection();
                db.Users.Add(new_user);
                var new_lines = db.SaveChanges();
                if (new_lines == 0)
                    return false;
            }
            catch(Exception e)
            {
                throw e;           
            }

            return true; // means that a new user is added successfuly to the database.
        }

    }
}
