const mongoose = require('mongoose');

const HospitalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,'Please add a name'],
        unique: true,
        trim: true,
        maxlength:[50,'Name can not be more than 50 characters']
    },
    address:{
        type: String,
        required: [true,'Please add a address'],
    },
    district:{
        type: String,
        required: [true,'Please add a district'],
    },
    province:{
        type: String,
        required: [true,'Please add a  province'],
    },
    posttalcode:{
        type: String,
        required: [true,'Please add a  posttalcode'],
        maxlength:[5,'Postal Code can not be more than 5 digit']
    },
    tel:{
        type: String,
    },
    province:{
        type: String,
        required: [true,'Please add a  province'],
    },
    region:{
        type:String,
        required: [true,'Please add a  region'],
    }
});

module.exports=mongoose.model('Hospital', HospitalSchema);