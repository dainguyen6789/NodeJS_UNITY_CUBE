const express=require('express');
const exphdbs=require('express-handlebars');
const app=express(); // create an app from express function
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const methodOverride=require('method-override');

mongoose.connect('mongodb://localhost:27017/cms',{useNewUrlParser: true}).then((db)=>
{
    console.log('Mongo Connected');
}).catch(error=>console.log(error));

// register the handle function
//const {select}=require('./helpers/handlebars-helpers');

////config to use static files.
const path=require('path');
app.use(express.static(path.join(__dirname,'public')));
// set View engine
app.engine('handlebars',exphdbs({defaultLayout:'admin'}));
app.set('view engine','handlebars');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));



//const main=require('./routes/home/main');
//const admin=require('./routes/admin/admin');
const post=require('./routes/admin/posts');

//app.use('/',main);
//app.use('/admin',admin);//
app.use('/admin/posts',post);//

app.listen(4500,()=>{
    console.log('listening on Port 4500');
});