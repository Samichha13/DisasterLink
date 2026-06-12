
const Alert=require('../models/Alert');
const createAlert=async(req,res)=>{
    const{title,description,location,type}=req.body;
    try{
    const alert=await Alert.create({
        title,
        description,
        location,
        type,
        createdBy:req.user.id
    })
    res.status(201).json(alert)
    } catch(error){
        res.status(500).json({ message: error.message })
    } 
}

const getAlert=async(req,res)=>{
    try{
    const alerts=await Alert.find().populate('createdBy','name email role')
    res.status(200).json(alerts)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

const getAlertById=async(req,res)=>{
    try{
        const alert=await Alert.findById(req.params.id).populate('createdBy','name email role')
        if(alert)return res.status(200).json(alert)
    }
    catch(error){
        return res.status(404).json({ message: 'Alert not found' })
    }

}

const updateAlertStatus=async(req,res)=>{
    try{
        const alert=await Alert.findByIdAndUpdate(req.params.id,
        {status: req.body.status},
        {new:true})
        return res.status(200).json(alert)
    }
    catch(error){
        return res.status(404).json({ message: 'Alert not found' })

    }

}

const deleteAlert=async(req,res)=>{
    try{
        const alert=await Alert.findByIdAndDelete(req.params.id)
        return res.status(200).json({message:'Alert deleted'})
    }
    catch(error){
        return res.status(404).json({message:'Alert not found'})
    }
}

module.exports={createAlert , getAlert, getAlertById, updateAlertStatus,deleteAlert};