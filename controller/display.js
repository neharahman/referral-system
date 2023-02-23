const SignupModel = require('../model/signup_model.js')

module.exports.displayAll = async (req,res)=>{
    try{
        let display=await SignupModel.find()
        res.send(display)
    }catch(err){
        if(err) console.log('inside signup',err)
        res.status(400).json({
            status:'fail',
            message:'something went wrong',
            error:err
        })
    }
}