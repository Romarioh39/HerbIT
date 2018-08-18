insert into chat_group (room_id, user_handle) values
    ('4fe7484d-7fe7-4213-be2e-c2d02947fc39', 'chatroom')
on conflict do nothing;