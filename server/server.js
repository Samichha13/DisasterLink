const dotenv= require('dotenv');
dotenv.config();
const PORT= process.env.PORT || 5000;
const connectDB=require('./config/db');
const express= require('express');
const cors= require('cors');
const authRoutes=require('./routes/authRoutes');
const alertRoutes=require('./routes/alertRoutes');
const resourceRoutes = require('./routes/resourceRoutes')
const volunteerRoutes = require('./routes/volunteerRoutes')
const app= express();
app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes)
app.use('/api/alerts',alertRoutes)
app.use('/api/resources', resourceRoutes)
app.use('/api/volunteers',volunteerRoutes)

app.get('/',(req,res)=> {
    res.send("Server running of disasterlink");
});



connectDB();
app.listen(PORT ,() => console.log(`Server running on port ${PORT}`));