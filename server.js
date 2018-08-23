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

app.listen(8000, ()=>console.log('localhost listing 8000!!'));