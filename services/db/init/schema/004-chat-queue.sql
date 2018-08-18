create table if not exists chat_queue
(
    user_handle uuid references users(user_handle),
    chat_id uuid references chat_group(id),
    primary key (user_handle, chat_id)
);
grant select, insert, update, delete on table chat_queue to project_app;
grant select on table chat_queue to project_read;