create TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE,
    created_at timestamp


);

create TABLE chats(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)  UNIQUE,
    created_at timestamp


);

create TABLE messages(
    id SERIAL PRIMARY KEY,
    id_user SERIAL not null references users (id) ON DELETE SET NULL ON UPDATE CASCADE,
    id_chat SERIAL not null references chats (id) ON DELETE SET NULL ON UPDATE CASCADE,
    text VARCHAR(255),
    created_at timestamp


);

create TABLE user_chats(
    id_user SERIAL not null references users (id) ON DELETE SET NULL ON UPDATE CASCADE,
    id_chat SERIAL not null references chats (id) ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT PK_user_chats PRIMARY KEY (id_user,id_chat)
);






