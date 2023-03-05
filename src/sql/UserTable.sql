create table if not exists demo.users
(
    user_id  int auto_increment
        primary key,
    username varchar(25) not null,
    password varchar(30) not null,
    unique(username)
);