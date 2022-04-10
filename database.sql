
create TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE,
    created_at timestamp


);

create TABLE chat(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)  UNIQUE,
    created_at timestamp


);

create TABLE message(
    id SERIAL PRIMARY KEY,
    id_user SERIAL not null references users (id),
    id_chat SERIAL not null references chat (id),
    text VARCHAR(255),
    created_at timestamp


);

create TABLE user_chat(
    id_user SERIAL not null references users (id),
    id_chat SERIAL not null references chat (id),
    CONSTRAINT PK_user_chat PRIMARY KEY (id_user,id_chat)
);



