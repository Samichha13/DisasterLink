const mongoose=require('mongoose');


const resourceSchema=new mongoose.Schema({
    name:{type:String,required:true},
    type:{type:String,enum:['food','water','vehicle','shelter','medicine','other']},
    quantity:{type:Number,required:true},
    location:{type:String,required:true},
    status:{type:String,enum:['available','depleted'],default:'available'},
    managedBy:{type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true}
})

const Resource = mongoose.model('Resource', resourceSchema)
module.exports = Resource;