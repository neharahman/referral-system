const SignupModel = require('../model/signup_model.js');
const {createToken} = require('../other/jwtToken.js');
module.exports.login = async (req,res)=>{
    try{
        let {userName,password}=req.body
        console.log('inside login',userName,password)
        SignupModel.findOne({userName:userName,password:password},async(err,data)=>{
            if(err) throw err
            let jwt=await createToken(data._id)
            console.log('inside login ',jwt)
            res.send(jwt)
        })
    }catch(err){
        if(err) console.log('inside login',err)
        res.status(400).json({
            status:'fail',
            message:'login fail',
            error:err
        })

    }
}