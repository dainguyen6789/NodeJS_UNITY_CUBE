
const express=require('express');
const router=express.Router();


router.all('/*',(req,res,next)=>
{
    req.app.locals.layout='admin';// route to views/admin folder
    next();
});
//==========================
// routing
router.get('/',(req,res)=>{
    res.render('admin/index');
});

// export thing out
module.exports=router;