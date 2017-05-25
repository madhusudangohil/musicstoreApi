var db = require('./db.js');
var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.json());


app.use(function (req, res, next) {
    //Enabling CORS

    console.log(req.body); 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});


//Setting up server
 var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

//Initiallising connection string

//Function to connect to database and execute query
var  executeQuery = function(res, query){             
    // create Request object
        var request = new db.Request();
        // query to the database
        request.query(query, function (err, recordset) {
        if (err)
        {
            console.log("Error while querying database :- " + err);
            res.send(err);
        }
        else
        {
            res.send(recordset);
        }});
}

//GET API
app.get("/api/genres", function(req , res){
                var query = "select * from genres";
                executeQuery (res, query);
});

//POST API
 app.post("/api/genre", function(req , res){
    console.log(req.body); 
    var query = "INSERT INTO [genres] (Name,Description,CreatedOn,CreatedBy) VALUES ('" + req.body.Name + "','" + req.body.Description + "','" + req.body.CreatedOn + "','" + req.body.CreatedBy + "')";
    console.log(query);
    executeQuery (res, query);
});