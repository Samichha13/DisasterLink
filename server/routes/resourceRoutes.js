const express=require('express');
const router=express.Router();
const protect = require('../middleware/authMiddleware')
const {createResource,getResource,updateResource,deleteResource}=require('../controllers/resourceController');

router.post('/',protect, createResource);
router.get('/',getResource);
router.put('/:id',protect,updateResource);
router.delete('/:id',protect,deleteResource);

module.exports=router;



