create table if not exists helo_users (
    user_id serial primary key,
    user_display_name text,
    user_password text,
    img text
);
create table if not exists helo_posts (
    post_id serial primary key,
    post_title text,
    img text,
    post_content text,
    auth_id integer
)