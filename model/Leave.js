import mongoose from "mongoose";


const LeaveSchema = new mongoose.Schema({
    employeeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
    leaveTypes:{
        type:String,
        enum:["slick","casual","privilage"],
        required:true
    },
    reason:{
        type:String,
        minlength:2,
        maxlength:500,
        required:true,
    },
    status:{
        type:String,
        enum:["pending","approved","reject"],
        default:"pending"
    },
    approveBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,

    },
    rejectMessage:{
        type:String,
        minlength:2,
        maxlength:500,
    }
});

export default LeaveSchema;