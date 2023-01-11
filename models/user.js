const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        required:true,
        type:String,
        trim:true,
    },
    email:{
        required:true,
        trim:true,
        type:String,
        validate:{
           validator: (value)=>{
                  const re =  /^(([^\u0080-\uffff<>()\[\]\\.,;:\s@"]+(\.[^\u0080-\uffff<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  ;
                return  value.match(re);  
            },
            message:'Please enter a valid email address'
        }
          
    },
    password:{
        requried:true,
        type:String,
        validate:{
            validator:(value)=>{
                return value.length > 6;
            },
            message:'Password is too short!'
        }
    },
    address:{
        type:String,
        default:'',
    },
    type:{
        type:String,
        default:'user',
    },
});

const User = mongoose.model("User",userSchema);
module.exports = User;