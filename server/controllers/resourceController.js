const Resource=require('../models/Resource.js');

const createResource=async(req,res)=>{
    const { name, type, quantity, location, status } = req.body;
    try{
        const Resources=await Resource.create({
            name,
            type,
            quantity,
            location,
            status,
            managedBy:req.user.id
        }
        )
        res.status(201).json(Resources);
    }catch(error){  
        res.status(500).json({message:error.message})
    }
}

const getResource=async(req,res)=>{
    try{
        const Resources=await Resource.find().populate('managedBy', 'name email role')
        res.status(200).json(Resources)
    }
    catch(error){
        res.status(404).json({message:'Resource not found'})
    }
}

const updateResource=async(req,res)=>{
    try{
        const Resources=await Resource.findByIdAndUpdate(req.params.id,
        {status: req.body.status},
        {new:true})
        return res.status(200).json(Resources)
    }
    catch(error){
        return res.status(404).json({message:'Resource not found'})
    }
}


const deleteResource=async(req,res)=>{
    try{
        const Resources=await Resource.findByIdAndDelete(req.params.id)
        return res.status(200).json({message:'Resource deleted'})
    }
    catch(error){
        return res.status(404).json({message:'Resource not found'})
    }
}

module.exports={createResource,getResource,updateResource,deleteResource}