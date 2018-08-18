create table if not exists chat_history
(
    room_id uuid references from chat_group(room_id) not null,
    user_handle uuid references from users(user_handle) not null,
    order_num integer NOT NULL,
    massage text not null,
    primary key (room_id, user_handle, order_num)
);
grant select, insert, update, delete on table chat_history to project_app;
grant select on table chat_history to project_read;
