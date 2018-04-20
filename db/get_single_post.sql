select post_title, helo_posts.img, post_content, user_display_name, helo_users.img from helo_posts
join helo_users
on auth_id = user_id
where post_id = $1