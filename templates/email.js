import dotenv from "dotenv"

dotenv.config({path:"./env/.dev.env"});

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service:"gmail",
  auth: {
    user: process.env.GMAIL_USER ,
    pass: process.env.MAILER_PASSWORD,
  },
});


const sendEmail = async({to,subject,html}) =>{
    try{
        const info = await transporter.sendMail({
            from:'"Leave management system" <process.env.GMAIL_USER>',
            to,
            subject,
            html,
        })

        console.log("Message sent:",info.messageId)

    }catch(error){

          console.log(error.message);
    }
}


export default sendEmail;