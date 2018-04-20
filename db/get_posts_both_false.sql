select * from helo_posts
join helo_users
on auth_id = user_id
where auth_id != $1