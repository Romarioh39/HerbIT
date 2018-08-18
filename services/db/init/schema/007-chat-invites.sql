create table if not exists chat_invites
(
    id uuid primary key default gen_random_uuid(),
    inviter uuid references users(user_handle) not null,
    invited uuid references users(user_handle) not null,
    accepted boolean
);
grant select, insert, update, delete on table chat_invites to project_app;
grant select on table chat_invites to project_read;