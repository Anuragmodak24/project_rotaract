const { Schema, model} = require("mongoose");

const donorSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    birthyear:{
        type:Number,
        require:true
    },
    mobile:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    }
},{timestamps:true});
const Donor = model ('donate' ,donorSchema);
module.exports = Donor