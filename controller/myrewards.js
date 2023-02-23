const SignupModel = require('../model/signup_model.js');
const {verifyToken} = require('../other/jwtToken.js')

module.exports.myRewards=async (req,res)=>{
    try{
        const {authorization}=req.headers
        let jwt=await verifyToken(authorization)
        console.log('inside myRewards',jwt)
        SignupModel.findById(jwt.id,(err,data)=>{
            if(err) throw err
            console.log(data.myInvites)
            let referral=data.myInvites
            let amount=data.myInvites.reduce((acc,res)=>{
                acc=acc+res.amount
                return acc
            },0)
            res.status(200).json({
                totalAmount:amount,
                referral
            })
        })
        

    }catch(err){
        if(err) console.log('inside myinvites',err)
        res.status(400).json({
            status:'fail',
            message:'something went wrong',
            error:err
        })
    }
}