const express = require('express'),
      path = require('path'),
      bodyparser = require('body-parser'),
      mongoose = require('mongoose'),
      app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname + "/public/dist/public")))

//-----------Mongoose Connect & Schema ------------------
mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true });
mongoose.Promise = global.Promise;



//----------- ROUTES -----------------
const router = require('./server/routes');

router(app);
app.all("*", (req,res)=>res.sendFile(path.join(__dirname, "/public/dist/public/index.html")));



//------------PORT LISTENER -------------------
app.listen(8000, function(){
    console.log("Now Serving on localhost 8000");
})