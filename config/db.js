

import mongoose from "mongoose"

const connectDB = async () =>{
    try{

        const connect = mongoose.connect("mongodb+srv://goyanihitisha32_db_user:dY6gox1CYFCyXXOa@leave-management.pzl0wpa.mongodb.net/")

        return connect;

    }catch(error){

        throw new Error(error.message);

    }
};


export default connectDB;
