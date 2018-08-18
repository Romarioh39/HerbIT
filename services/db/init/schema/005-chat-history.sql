create table if not exists chat_history
(
    id uuid primary key default gen_random_uuid(),
    history_name text not null,
    order_id integer NOT NULL,
    massage text not null
);
grant select, insert, update, delete on table chat_history to project_app;
grant select on table chat_history to project_read;
