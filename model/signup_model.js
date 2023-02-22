const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const signupSchema=new Schema({

	name:{
        type:String
    },
	phone:{
        type:Number,
        length:10
    },
    password:{
        type:String
    },
	userName:{
        type:String
    },
	refCode:{
        type:String
    },
	points:{
        type:Number,
        default:0
    },
	referredBy:{
        type:String,
        default:''
    },
    myInvites:[
                {
                    userName:{
                        type:String
                    },
                    userId:{
                        type:String
                    },
                    referredAt:{
                        type:String
                    },
                    amount:{
                        type:Number
                    }
                }
              ]
})

const SignupModel=mongoose.model('signup_table',signupSchema)
module.exports=SignupModel