

import mongoose from "mongoose"

const connectDB = async () =>{
    try{

        const connect = mongoose.connect(process.env.MONGO_URL)

        return connect;

    }catch(error){

        throw new Error(error.message);

    }
};


export default connectDB;
