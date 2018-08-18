create table if not exists chat_history_queue
(
    user_handle uuid references users(user_handle),
    history_id uuid references chat_history(id),
    primary key (user_handle, history_id)
);
grant select, insert, update, delete on table chat_history_queue to project_app;
grant select on table chat_history_queue to project_read;