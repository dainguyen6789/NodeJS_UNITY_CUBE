const express=require('express');
const router=express.Router();
const Posta=require('../../Model/Post');
x='10';
y=parseInt(x,10)+5;

console.log(y);
router.all('/*',(req,res,next)=>
{
    req.app.locals.layout='admin';// route to views/admin folder
    next();
});

router.get('/',(req,res)=>{


    Posta.find({}).then(posts=>{
        res.render('admin/posts',{post: posts});
    });

});


router.get('/edit/:id',(req,res)=>{

    Posta.findOne({_id: req.params.id}).then(post=>
    {
        res.render('admin/posts/edit',{post: post});
    });
    //res.send(req.params.id);

});


router.get('/create',(req,res)=>{
    res.render('admin/posts/create');
});

router.post('/create',(req,res)=>
{
    const newPost=Posta({
        RotX: req.body.RotX,
        RotY: req.body.RotY,
        RotZ: req.body.RotZ,
        Red: req.body.Red,
        Green: req.body.Green,
        Blue: req.body.Blue,

    });
    newPost.save().then(savedPost =>{

        res.redirect('/admin/posts');

    }).catch(error =>{
        console.log("Could not save post: " + error);
    });
    //console.log(req.body.title);
});

router.put('/edit/:id',(req,res)=> {
    Posta.findOne({_id: req.params.id}).then(post => {

        //post.title=req.body.title;
        post.RotX = req.body.RotX;
        post.RotY=req.body.RotY;
        post.RotZ=req.body.RotZ;
        post.Red = req.body.Red;
        post.Green=req.body.Green;
        post.Blue=req.body.Blue;

        post.save().then(updatePost=>{
            res.redirect('/admin/posts');
        });
    });
});


module.exports=router;