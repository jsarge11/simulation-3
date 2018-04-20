create table if not exists helo_users (
    auth_id serial primary key,
    user_display_name text,
    user_password text,
    img text
);
create table if not exists helo_posts (
    post_id serial primary key,
    auth_id integer
    post_title text,
    img text,
    post_content text,
)