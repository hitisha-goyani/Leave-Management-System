import jwt from "jsonwebtoken";

import User from "../model/USer.js";
import HttpError from "./ErrorHandler.js"


const auth = async (req,res,next) =>{
    try{

        const authHeader = req.header("authorization")

        if( !authHeader || !authHeader.startsWith("Bearer ")){
            next(new HttpError("authorization failed",500));
        }

        const token = authHeader.replace("Bearer ","");

        const decode = jwt.verify(token,process.env.JWT_SECRET)

        const user = await User.findOne({_id:decode._id,"tokens.token":token})

        if(!user){
            next(new HttpError("user not found",404))
        }

        req.user = user;


        req.token = token;

        next();

    }catch(error){

        next(new HttpError(error.message,500))

    }

}

export default auth;