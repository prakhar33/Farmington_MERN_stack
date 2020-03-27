const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcryptjs')
// const jwt=require('jsonwebtoken')

const subsidyschema=new mongoose.Schema({ //for middleware hashing pswd
    FirstName:{
        type:String
    },
    LastName:{
        type:String
    },
    FatherName:{
        type:String
    },
    Age:{
        type:String
    },
    Sex:{
        type:String
    },
    Occupation:{
        type:String
    },
    Address:{
        type:String
    },
    Aadhar :{
        type:String
    },
    phone:{
        type:String
    },
    Maritalstatus:{
        type:String
    },
    Annualincome:{
        type:String
    },
    Priority:{
        type:String
    },
    Subsidytype:{
        type:String
    },
    Investedamount:{
        type:String
    },
    Loanamount:{
        type:String
    },
    Landarea:{
        type:String
    },
    Additionaldetail:{
        type:String
    },
    Loanaccountnumber:{
        type:String
    },
    Accountholdername:{
        type:String
    },
    Bankname:{
        type:String
    },
    Branchname:{
        type:String
    },
    IFSCcode:{
        type:String
    },
    PAN:{
        type:String
    },
    Aadharcard:{
        type:String
    },
    PANcard:{
        type:String
    },
    Bankpassbook:{
        type:String
    },
    Incomecerti:{
        type:String
    },
    Cropregistercerti:{
        type:String
    },
    Landcerti:{
        type:String
    },
    Photo:{
        type:String
    },
    Signature:{
        type:String
    }
})

const Subsidy=mongoose.model('Subsidy',subsidyschema)

module.exports=Subsidy