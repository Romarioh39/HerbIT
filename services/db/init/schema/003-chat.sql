create table if not exists chat_group
(
    id uuid primary key default gen_random_uuid(),
    chat_name text not null,
);
grant select, insert, update, delete on table chat_group to project_app;
grant select on table chat_group to project_read;
