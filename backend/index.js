const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const db = mysql.createConnection({
    host  : 'localhost',
    user  : 'root',
    password : 'root',
    database : 'dbms_project',
    port : 3306
});  


//connect
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('MySql connected..')
});




app.listen('8081', () => {
    console.log ('Server started on port 8081');
});




//Insert new user
app.post('/Adduser',(req,res)=>{
    console.log(req.body);
    var sql = `INSERT INTO signup (fname,lname,phone,email,pass)    VALUES    (?,?,?,?,?)  `;
    db.query(sql,[req.body.fname,req.body.lname,req.body.phone,req.body.email,req.body.pass], function (err, 
        body) {
        if(err)
        {
            throw err;
        }
        console.log(req.body.fname,req.body.lname,req.body.phone,req.body.email,req.body.pass);

}); 

res.sendFile(__dirname + '/index.html');
});


app.get('/signup',(req,res) =>{
    res.sendFile(__dirname + '/index.html');
});



