const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const PostSchema=new Schema({

    RotX:{
        type: Number,
        default: 0,

    },
    RotY:{
        type: Number,
        default: 0,


    },

    RotZ:{
        type: Number,
        default: 0,


    },

    Red:{
        type: Number,
        default: 0,


    },
    Green:{
        type: Number,
        default: 0,


    },

    Blue:{
        type: Number,
        default: 0,


    },



});


module.exports= mongoose.model('Posta',PostSchema);