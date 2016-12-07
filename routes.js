//Set your dependencies here.
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const mysql = require('mysql');
const router = express.Router();

//Declare configurations for our Database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employeeRegistry'
});

//Connect to our Database
connection.connect();

//path.join joins two paths (duh). And __dirname is a server default for current directory. Thus, this command will join whatever directory server.js is in with index.html.

//Send index.html when home route is hit. req = request and res = response.
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

//When we receive a GET request from /getMyData, we query our database using sql,  and send the results as a json for our front end to parse.
router.get('/getMyData', function(req, res) {
    connection.query('SELECT * FROM employees', function(err, data) {
        if (err) throw err;
        res.send(data);
    });
});

//When newEmployee route is hit, send newEmployee.html
router.get('/newEmployee', function(req, res) {
    res.sendFile(path.join(__dirname, "newEmployee.html"));
});

//When post action is triggered from newEmployee route, run the following.
router.post('/newEmployee', function(req, res) {

    //Confirm that you're receiving data
    console.log(req.body);

    //Set the req.body into a few variables to use in your upcoming query.
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var age = req.body.age;
    var enjoys = req.body.enjoys;

    //Query our database using sql, insert new record into our database using user's input.
    connection.query('INSERT INTO employees(first_name, last_name, age, enjoys) VALUES("' + first_name + '","' + last_name + '",' + age + ',"' + enjoys + '")');

    //When query is complete, send user back to home page.
    res.redirect('/');
}); //end newEmployee post

//Export our router so server can use it.
module.exports = router;
