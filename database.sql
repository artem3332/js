
create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    created_at timestamp


);

create TABLE chat(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    created_at timestamp


);

create TABLE message(
    id SERIAL PRIMARY KEY,
    id_person SERIAL not null references person (id),
    id_chat SERIAL not null references chat (id),
    text VARCHAR(255),
    created_at timestamp


);

create TABLE person_chat(
    id_person SERIAL not null references person (id),
    id_chat SERIAL not null references chat (id),
    CONSTRAINT PK_person_chat PRIMARY KEY (id_person,id_chat)
);



