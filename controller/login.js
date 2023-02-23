const SignupModel = require('../model/signup_model.js');
module.exports.login = async (req,res)=>{
    let {userName,password}=req.body
    console.log('inside login',userName,password)
    SignupModel.findOne({userName:userName},(err,data)=>{
        //if(err) console.log(err)
        res.send('login successfully done')
    })
   
}