const SignupModel = require('../model/signup_model.js');
const {verifyToken} = require('../other/jwtToken.js')

module.exports.referAndEarn=async (req,res) =>{
    try{
        const {authorization}=req.headers
        let jwt=await verifyToken(authorization)
        SignupModel.findById(jwt.id,(err,data)=>{
            if(err) throw err
            console.log('hello refer and earn',data)
            res.status(200).json({
                Url :`localhost:3000?refCode=${data.refCode}`,
                refCode:data.refCode,
                youGet: 30,
                friendGets:50
            })
        })

    }catch(err){
        if(err) console.log('inside referAndEarn',err)
        res.status(400).json({
            status:'fail',
            message:'something went wrong',
            error:err
        })
    }
}