const User=require('../models/User');
const generateToken=require('../utils/generateToken');
const bcryptjs=require('bcryptjs');

const registerUser=async(req,res)=>{
    const{name,email,password,role}=req.body;
    const existingUser = await User.findOne({ email })
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' })
    }
    const hashedPassword=await bcryptjs.hash(password , 10);
    const user = await User.create({ name, email, password: hashedPassword, role })

    res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    token: generateToken(user._id, user.role)
})
}
const loginUser=async(req,res) =>
{
    const{email,password}=req.body;
    const existingUser=await User.findOne({email})
    if(!existingUser){
        return res.status(400).json({message:'User invalid'})
    }
    const isMatch = await bcryptjs.compare(password, existingUser.password);
    if(!isMatch){
        return res.status(401).json({message:'Invalid credentials'})
    }
    console.log(generateToken(existingUser._id,existingUser.role))
    res.status(200).json({
        _id: existingUser._id,
        email: existingUser.email,
        name:existingUser.name,
        role:existingUser.role,
        token:generateToken(existingUser._id,existingUser.role)

    })
}

module.exports={registerUser, loginUser};