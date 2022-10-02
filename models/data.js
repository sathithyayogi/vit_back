const mongoose = require ('mongoose')

const dataSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    middleName:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    country:{
        type:String,
        required: true
    },
    state:{
        type:String,
        required: true
    },
    zipcode:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    phone:{
        type:Number,
        required: true
    },
    height:{
        type:String,
        required: true
    },
    weight:{
        type:String,
        required: true
    },
    
    

})

module.exports = mongoose.model('Data',dataSchema)