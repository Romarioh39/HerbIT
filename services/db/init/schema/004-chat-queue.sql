create table if not exists chat_queue
(
    queue_id uuid primary key default gen_random_uuid(),
    user_handle uuid references users(user_handle)
);
grant select, insert, update, delete on table chat_queue to project_app;
grant select on table chat_queue to project_read;