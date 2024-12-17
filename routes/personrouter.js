const express = require('express');
const router = express.Router();
const person = require('.././models/person');

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newperson = new person(data);
        const response = await newperson.save();
        res.status(200).json(response);
    }
    catch (err) {
        res.status(500).json({ error: 'server error' });
    }

})


router.get('/',async (req,res)=>{
    try{
    const userdata = await person.find();
    res.status(200).json(userdata);
    }
    catch(err){
res.status(500).json(err);
    }
})

router.get('/:worktype', async (req, res) => {
    try {
        const worktype = req.params.worktype;
        if (worktype == "chef" || worktype == "waiter" || worktype == "manager") {
            const response = await person.find({ work:worktype });
            res.status(200).json(response);
        }
        else {
            res.status(404).json({err: 'person data not found'})
        }
    }
    catch (err) {   
        res.status(500).json({err : "server error"});
    }
})

router.patch('/:id',async (req,res)=>{
    try{
        const person_id = req.params.id;
        const personupdate = req.body;
        const response = await person.findByIdAndUpdate(person_id,personupdate,{
            new : true,
            runValidators : true
        })
        if(!response){
            res.status(404).json({err:"person not found"})
        }
        else{
            res.status(200).json(response)
        }

    }catch(err){
        res.status(500).json({err : "server error"});
    }
})

router.delete('/:id',async (req,res)=>{
    try{
        const object_id = req.params.id;
        const response = await person.findByIdAndDelete(object_id);
        if(!response){
            res.status(404).json({err:"person not found"})
        }else{
            res.status(200).json({message:'person deleted successful '});
        }

    }catch(err){
        res.status(500).json({err : "server error"});
    }
})
module.exports = router;
