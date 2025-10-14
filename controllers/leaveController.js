import HttpError from "../middleware/ErrorHandler.js"
import Leave from "../model/Leave.js";


const applyLeave = async(req,res,next) =>{
    try{
        const{startDate,endDate,leaveTypes,reason} = req.body;

        const leave = {
            employeeId :req.user.id,
            employeeName :req.user.name,
            startDate,
            endDate,
            leaveTypes,
            reason

        };
        const newLeave = await new Leave(leave);

        await newLeave.save();


        res.status(201).json({message:"leave application successfully..",leave:newLeave});

    }catch(error){
        next(new HttpError(error.message,500))
    }
}  

export default {applyLeave}; 