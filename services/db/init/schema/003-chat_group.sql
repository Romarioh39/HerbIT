create table if not exists chat_group
(
    room_id uuid, 
    user_handle uuid references from users(user_handle) not null,
    primary key (room_id, user_handle)
);
grant select, insert, update, delete on table chat_group to project_app;
grant select on table chat_group to project_read;
