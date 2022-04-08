
create TABLE Users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    created_at TIME


);

create TABLE Chat(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),

    created_at TIME


);

create TABLE Message(
    id SERIAL PRIMARY KEY,


    text VARCHAR(255),
    created_at TIME


);