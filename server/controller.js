module.exports = {
 register: (req, res) => {
  const db = req.app.get('db');
  let { user_display_name, user_password } = req.body;

  db.create_user([user_display_name, user_password, '']).then( user => {
    res.status(200).send(user);
  })
 },
 login: (req, res) => {
  const db = req.app.get('db');
  let { user_display_name, user_password } = req.body;


  db.get_user([user_display_name]).then( user => {
   if(user[0]) {
    if (user[0].user_password === user_password) {
     res.status(200).send( user );
    }
    else {
     res.status(401).send("wrong password");
    }
   }
   else {
    res.status(401).send("wrong username");
   }
  })
 },

 getposts: (req, res) => {
  const db = req.app.get('db');
  if (req.query.myposts && req.query.search) {
    db.get_posts_both_true(`%${req.query.search}%`).then (posts => {
      res.status(200).send( posts );
    })
  }
  else if (!req.query.myposts && !req.query.search) {
    db.get_posts_both_false(req.query.id).then ( posts => {
      res.status(200).send( posts );
    })
  }
  else if (!req.query.myposts && req.query.search) {
    db.get_posts_search_true(`%${req.query.search}%`,req.query.id).then ( posts => {
      res.status(200).send( posts );
    })
  }
  else {
   db.get_all_posts().then ( posts => {
     res.status(200).send ( posts );
   })
  }

 },
 get_single_post: (req, res) => {
  const db = req.app.get('db');
  
  db.get_single_post(req.params.id).then( post => {
    res.status(200).send( post );
  })
 }
}