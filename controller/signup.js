const SignupModel = require('../model/signup_model.js');
const rand = require('random-key');
module.exports.signUp=async (req,res) => {
   try{
        let {name,phone,password,refCode}=req.body
        console.log('inside siginup',name,phone,password,refCode)
        let random=rand.generateDigits(3).toLocaleLowerCase()
        let username=name.slice(0,4)+random+phone.slice(phone.length-4,phone.length)
        let refcode=rand.generateBase30(6)
        if(refCode){
            let refCode_exits=await SignupModel.findOne({refCode})
            console.log('ref data',refCode_exits)
            console.log('inside siginup username',username)
            if(refCode_exits){
                let SignupModel_ref=await new SignupModel({
                    name,
                    phone,
                    password,
                    points:50,
                    referredBy:refCode_exits._id,
                    userName:username,
                    refCode:refcode
                })
                console.log('inside signup if refcode found',SignupModel_ref)
                let referrad_signup=await SignupModel_ref.save()
                if(refCode_exits['myInvites']){
                    refCode_exits['myInvites'].push({userName:SignupModel_ref.name,userId:SignupModel_ref.id,amount:50})
                }
                else{
                    refCode_exits['myInvites']={userName:SignupModel_ref.name,userId:SignupModel_ref.id,amount:50}
                }
                refCode_exits['points']=30
                await SignupModel.findByIdAndUpdate(refCode_exits.id,refCode_exits)
                res.send(referrad_signup)
            }
        }
        else{
            let SignupModel1=await new SignupModel({
                name,
                phone,
                password,
                userName:username,
                refCode:refcode
            })
            await SignupModel1.save((err,data)=>{
                if(err) throw err
                console.log(data)
                res.send(data)
            })
        }
   }catch(err){
       if(err) console.log('inside signup',err)
       res.status(400).json({
           status:'fail',
           message:'something went wrong',
           error:err
       })
   }
   
}