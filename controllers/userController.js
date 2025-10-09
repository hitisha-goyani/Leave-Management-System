import User from "../model/USer.js"
import HttpError from "../middleware/ErrorHandler.js"
// import RegisterUser from "../validations/userValidation.js";


const addUser = async (req,res,next)=>{

try{


    // const {error,value} = RegisterUser.validate(req.body);

    // if(error){

    //     return res.status(400).json(error.message);
    // }

    // req.body = value;
    
    const {name,email,password,role,department} = req.body


    const existingUSer = await User.findOne({email})

    if(existingUSer){
        return next (new HttpError("user already exist this id",400))
    }

    const newUser ={
        name,
        email,
        password,
        role,
        department
    }

    const saveUser = new User(newUser);


    await saveUser.save();

    res.status(201).json({message:"user created sucessfully" , saveUser})

}catch(error){

    return next(new HttpError(error.message,500)) 

}
};

export default {addUser};