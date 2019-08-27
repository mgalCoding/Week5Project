//code almost the same as the supplementary material provided
//type nodemon in terminal
// npm install -g nodemon
//system properties
//npm init hyphen y
//npm install express
//terminal nodemon app.js (file name)
//f1
//terminal npm install ejs
//git init
//put .gitignore
//inside list file:
//node_modules
//*-lock.json
let express = require('express');
let app = express();


let bodyParser = require('body-parser');
//terminal: npm install body-parser

app.use(bodyParser.urlencoded({extended:false}));


app.use(express.static('images'));
app.use(express.static('css'));

let db=[];

app.engine("html", require('ejs').renderFile);
app.set("viewengine")//


let viewsPath=__dirname+'/views/';//bring current path then attach views

app.get('/',function(req,res){
    res.sendFile(viewsPath+"home.html");
});


app.get('/listtasks', function (req,res){
    //console.log(req.body);//prints undefined because you need the body parser
    res.render(viewsPath+"listtasks.html", {
        tasks: db
    });
});

app.get('/addtask', function (req,res){
    res.sendFile(viewsPath+"addtask.html");
});

app.post('/addtask', function (req,res){
    //console.log(req.body);//prints undefined because you need the body parser
    db.push(req.body);
    res.sendFile(viewsPath+"addtask.html");
    //res.sendFile(viewsPath+"addtask.html");//send to this page. without this line then nothing will happen after the submit is clicked
});


app.listen(7000);