const nodemailer  = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config()


const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

const mailOptions = {
    from: `sumedhzodape143@gmail.com`,
    to: `manaskokate09@gmail.com,
    154awadhai@gmail.com, 
    khushifale@gmail.com,
    bagheleradha275@gmail.com,
    shrawanidurgapurohit09@gmail.com,
    alkeshmanas0741@gmail.com`,
    subject: 'Testing Email',
    text: 'Hello World?',
    html:`<h1 style="background-color:green">Hum thik hai????</h1>`
}

transporter.sendMail(mailOptions, (err,info)=>{
    if(err){
        console.log("Some problem ",err)
    }else{
        console.log("Email send ", info)
    }
})



// hey
