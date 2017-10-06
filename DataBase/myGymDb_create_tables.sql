

create table Users
(
user_id char(9) primary key,
user_name char(20) not null,
password char(6) not null ,
first_name nvarchar(15) not null,
last_name nvarchar(20) not null,
phone char(12),
birthday datetime,
create_date datetime,
expiration_date datetime,
is_active bit default(1),
);

create table Managers
(
	user_id char(9) primary key foreign key references Users(user_id),
	experience_months int 
);


create table Instructors
(
	user_id char(9) primary key foreign key references Users(user_id),
);

insert into Instructors
values('1')

create table Lessons
(
lesson_id char(9) primary key,
lesson_name nvarchar(20) not null,
lesson_days nvarchar(10),
lesson_start_time time,
lesson_duration float(10),
free_space int check(free_space >=0),
instructor_id char(9) foreign key references Users(user_id),
training_type char(10) not null,
gear varchar(80)
);

create table UserInLesson
(
user_id char(9) foreign key references Users(user_id),
lesson_id char(9) foreign key references Lessons(lesson_id),
participation_datetime datetime,
record_id int identity(1,1) primary key
);

----------------------------

select * 
from Users


select * 
from Managers


select * 
from Lessons


select * 
from UserInLesson


------------------

insert into Users
values('2','shimiya','123456', 'שימעון' , 'גניש','0537203788',24/03/1979,GETDATE(),DATEADD(YEAR, 1, GETDATE()),'1');


insert into Managers
values('1',36)

------------------


insert into Lessons
values('100','funSpin','א, ג, ה,' ,'18:00:00',1,'10','1','ספינינג','closed shoes, towel');

----------------

insert into UserInLesson
values('1','100',GETDATE());