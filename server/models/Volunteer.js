const mongoose=require('mongoose');


const volunteerSchema=new mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
    },
    skills:[String],
    location:{type:String},
    availability:{type:Boolean},
    assignedAlert:{type: mongoose.Schema.Types.ObjectId,
    ref: 'Alert',
    required: false
    }

})
const Volunteer=mongoose.model('Volunteer',volunteerSchema);
module.exports=Volunteer;
