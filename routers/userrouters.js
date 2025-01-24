const express=require('express');
const router=express.Router();
const usercontroller=require('../controllers/usercontroller');
router.post('/add-user',usercontroller.adduser);
router.get('/get-user',usercontroller.getuser);
module.exports=router;
