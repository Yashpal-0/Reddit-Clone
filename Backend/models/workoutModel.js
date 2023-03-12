const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const workoutSchema=new Schema({
    Fname:{
        required:true,
        type:String
    },
    Lname:{
        required:true,
        type:String
    },
    username:{
        required:true,
        type:String
    },
    age:{
        required:true,
        type:Number
    },
    number:{
        required:true,
        type:Number
    },

    email:{
        require:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    
})

module.exports = mongoose.model('Workout', workoutSchema);