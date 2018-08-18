insert into chat_history (id, history_name, order_id) values
    ('$2y$12$yppbJgTWqZ6gKX5OtcCuA.tqujXkKBr0yeZBYZXF5dILWIp139Oy.', 'chatroom',(1)),
    ('$2y$12$RkaWnIZ28tUc4J/QHJymHuthP/Qxkf66dMXrJBOsg8Qcnz.jO//Ga', 'chathistory', (2)),
    ('$2y$12$57ktNabV9YmCanyKIVDtHe3tAuxy8TLPWRLns4/XNnnSOGi/dXgZW', 'id',(3))
on conflict do nothing;