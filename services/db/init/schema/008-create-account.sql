create table if not exists create_account
(
    password_id uuid primary key default gen_random_uuid(),
    user_handle uuid references from users(user_handle) not null,
    email uuid references users(user_handle) not null,
    tel integer NOT NULL
);
grant select, insert, update, delete on table create_account to project_app;
grant select on table create_account to project_read;
