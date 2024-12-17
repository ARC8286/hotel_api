const express = require('express');
const router = express.Router();
const menuItem = require('.././models/menuItem');

router.post('/',async (req,res)=>{
    try{
     const data = req.body;
     const newmenu = new menuItem(data);
      const response = await newmenu.save();
      res.status(200).json(response);
    }catch(err){
     res.status(500).json({err : "server error"});
    }
 })
 

 router.get ('/',async (req,res)=>{
     try{
         const response = await menuItem.find();
         res.status(200).json(response);
     }catch(err){
         res.status(500).json({err:'server error'});
     }
 })
 
 router.get('/:foodtaste',async (req,res)=>{
    try{
        const foodtaste = req.params.foodtaste;
        if(foodtaste=='spicy'||foodtaste=='sweet'||foodtaste=='sour'){
            const response = await menuItem.find({taste : foodtaste})
            res.status(200).json(response);
        }
    }catch(err){
        res.status(500).json({err:'server error'});
    }
    
 })

 router.patch('/:id',async (req,res)=>{
     try{   const id = req.params.id;
     const data = req.body;
    const response = await menuItem.findByIdAndUpdate(id,data,{
        new : true,
        runValidators : true
    })
    if(!response){
 
        res.status(404).json({message : "item not found"})
    }else{
        res.status(200).json(response);
    }
}catch(err){
    res.status(500).json({err:'server error'});
}
 })

 router.delete('/:id',async(req,res)=>{
  try{
    const id = req.params.id;
    const response  = await menuItem.findByIdAndDelete(id);
    if(!response){
        res.status(404).json({message : "item not found"});
    }else{
  
        res.status(200).json({message:'item deleted successfully'});
    }
  }catch(err){
    res.status(500).json({err:'server error'});
  }

 })
 module.exports = router;