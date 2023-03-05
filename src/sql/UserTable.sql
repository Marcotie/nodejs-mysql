create table if not exists demo.users
(
    id   int auto_increment
        primary key,
    created_at timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    updated_at timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    username  varchar(25)                         not null,
    password  varchar(30)                         not null,
    constraint username
        unique (username)
);
insert into demo.users(username,password) values("test","test");