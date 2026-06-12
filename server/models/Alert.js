const mongoose=require('mongoose');
 

const alertSchema=new mongoose.Schema({
    title:{type:String , required:true},
    description:{type:String , required:true},
    location:{type:String},
    type:{type:String , enum:['flood','earthquake','fire','cyclone','other']},
    status:{type:String , enum:['active','inProgress','resolved'], default:'active'},
    createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true}
})
const Alert = mongoose.model('Alert', alertSchema)

module.exports=Alert;