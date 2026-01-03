/* eslint-disable no-undef */
const jwt=require('jsonwebtoken')

const authToken={
    generateToken:(userData)=>{
        const token=jwt.sign({userData},process.env.AUTH_KEY)
        return token
    },
    verifyToken:(req,res,next)=>{
       try{
         const token = req.cookies.token;
        const decode=jwt.verify(token,process.env.AUTH_KEY)
        req.userid=decode.userData.id
        req.useremail=decode.userData.email
        req.userlocation=decode.userData.location
        next()
       }catch(err){
        console.log(err)
       }
    }
}

module.exports=authToken