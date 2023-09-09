const express=require('express')
const {mongoose}=require('mongoose')
const userRoute=require("./Routes/user.route.js")
const cors = require("cors")
const donorRoute=require("./Routes/donate.route.js")
const conatctRoute=require("./Routes/contact.route.js")
const paymentScreenshot=require("./Routes/payment.route.js")

const app = express()
app.use(express.json());
app.use(cors())


app.use("/v1/api",userRoute)
app.use("/v1/api",donorRoute)
app.use("/v1/api",conatctRoute)
app.use("/v1/api",paymentScreenshot);

const MONGO_URI = "mongodb+srv://jonak2408:jonak2408@cluster0.coaeibz.mongodb.net/rotaract";
const connect = async() => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("Connected to Database");//to check my database is going on
    } catch (error) {
        console.log(error.message);
    }
}


app.listen(8001,()=>{
    connect()
    console.log("http://127.0.0.1:8001")
});