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
   console.log(user);
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
 }
}