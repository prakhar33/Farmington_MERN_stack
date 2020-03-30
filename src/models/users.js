const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const userschema=new mongoose.Schema({ //for middleware hashing pswd
    name:{
        type:String,
        required:true,
        trim:true
    },
    surname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('email format wrong')
            }
        },
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        minlength:4,
        trim:true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cant contain "password')
            }
        }
    }    
})

const User=mongoose.model('User',userschema)

module.exports=User