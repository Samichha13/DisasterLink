const express = require('express')
const router = express.Router();
const{createAlert , getAlert, getAlertById,updateAlertStatus, deleteAlert}=require('../controllers/alertController');
const protect=require('../middleware/authMiddleware')
router.post('/',protect, createAlert);
router.get('/', getAlert);
router.get('/:id', getAlertById);
router.put('/:id',protect,updateAlertStatus);
router.delete('/:id',protect,deleteAlert);

module.exports=router;
