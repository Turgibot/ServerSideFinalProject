//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ClassLibrary
{
    using System;
    using System.Collections.Generic;
    
    public partial class UserInLesson
    {
        public string user_id { get; set; }
        public string lesson_id { get; set; }
        public Nullable<System.DateTime> participation_datetime { get; set; }
        public int record_id { get; set; }
    
        public virtual Lesson Lesson { get; set; }
        public virtual User User { get; set; }
    }
}
