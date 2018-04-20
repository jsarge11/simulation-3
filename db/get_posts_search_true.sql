select * from helo_posts
join helo_users
on auth_id = user_id
where post_title like $1 
and auth_id != $2