
ALTER TABLE Lessons
ALTER COLUMN training_type nvarchar(15);

ALTER TABLE Lessons
ALTER COLUMN gear nvarchar(80);


insert into Users
values('eliko','111111','eli','cohen','052123123',GETDATE(),'');

create table Users
(
user_id int identity(1,1) primary key,
user_name char(20) unique not null,
password char(6) not null ,
first_name nvarchar(15) not null,
last_name nvarchar(20) not null,
phone char(12),
birthday date,
is_manager bit default(0)
);


create table Lessons
(
lesson_id char(9) primary key,
lesson_name nvarchar(20) not null,
lesson_days nvarchar(10),
lesson_start_time time,
lesson_duration float(10),
capacity int check(capacity >=0),
instructor_name nvarchar(25) ,
training_type nvarchar(15) not null,
gear nvarchar(80)
);

create table UserInLesson
(
user_id int foreign key references Users(user_id),
lesson_id char(9) foreign key references Lessons(lesson_id),
participation_datetime datetime,
record_id int identity(1,1) primary key
);

----------------------------

select * 
from Users


select * 
from Lessons


select * 
from UserInLesson


------------------



insert into Managers
values('1',36)

------------------


insert into Lessons
values('100','funSpin','א, ג, ה,' ,'18:00:00',1,'10','1','ספינינג','closed shoes, towel');

----------------

insert into UserInLesson
values('1','100',GETDATE());