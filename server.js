const express = require("express");
const path = require("path");

const router = require("./server/routes");

const app = express();

const session = require('express-session');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(express.static(path.join(__dirname, "/public/dist/public")));

router(app);
app.all("**", (req,res)=>res.sendFile(path.join(__dirname + "/public/dist/public/index.html")));


// app.post('/sessions', (req, res) => {
//     console.log(" req.body: ", req.body);
//     User.findOne({email:req.body.email, password: req.body.password}, (err, user) => {
//         if (err) {
//             // Code...
//         }
//         else {
//             // Code...
//     		req.session.user_id = user._id;
// 		req.session.email = user.email;
//         }
//     })
// })

app.listen(8000, ()=>console.log('localhost listing 8000!!'));