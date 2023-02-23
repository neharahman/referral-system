const SignupModel = require('../model/signup_model.js');
const {verifyToken} = require('../other/jwtToken.js')

module.exports.myInvites=async (req,res)=>{
    try{
        const {authorization}=req.headers
        let jwt=await verifyToken(authorization)
        console.log('inside myinvites',jwt)
        SignupModel.findById(jwt.id,(err,data)=>{
            if(err) throw err
            console.log(data.myInvites)
            let referral=data.myInvites
            res.status(200).json({
                count:data.myInvites.length,
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