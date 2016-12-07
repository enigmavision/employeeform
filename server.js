/***    SERVER.JS PSEUDOCODE    ***/
const express = require('express');
const bodyParser =require('body-parser');
const app = express();
const path = require('path');


    //Require our Dependencies and routes.js

    //Serve up our assets folder
app.use(express.static(path.join(__dirname, 'assets')));
    //Use the bodyparser
app.use(bodyParser.urlencoded({
  extended:false
}));
    //Pull in our routes
const routes = require('./routes.js');
app.use('/', routes);
    //Listen to Port
app.listen(process.env.PORT || 9001, function(){
  process.env.PORT == undefined?
  console.log('App listening on PORT OVER 9000!'):console.log('App listening on PORT' + process.env.PORT);
})


// end listen
