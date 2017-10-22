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

    }
}
