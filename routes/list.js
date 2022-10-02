const express = require('express')
const router = express.Router()
const Data = require('../models/data')



//

router.get('/',async (req, res) => {

    try{
        const list = await Data.find()
        res.json(list)
    }catch (err) {
        res.status(500).json ({message:err.message})
    }
})

router.get('/:id',getData, (req, res) => {
    res.json(res.data)
})

router.post('/form/save-details',async (req, res) => {
    console.log(req.body);
    const data = new Data ({
        firstName: req.body.fname,
        lastName: req.body.lname,
        middleName: req.body.mname,
        address: req.body.address,
        country: req.body.country,
        state: req.body.state,
        zipcode: req.body.zip,
        email: req.body.email,
        phone: req.body.phone,
        height: req.body.height,
        weight: req.body.weight

    })
    try {
        const newData = await data.save()
        res.status(201).json(newData)
    }catch (err) {
        res.status(400).json({message: err.message })
    }
})
router.patch('/update/:id', getData, async (req, res) => {
    if (req.body.firstName != null){
        res.data.firstName = req.body.firstName
    }
    if (req.body.lastName != null){
        res.data.lastName = req.body.lastName
    }
    if (req.body.middleName != null){
        res.data.middleName = req.body.middleName
    }
    if (req.body.address != null){
        res.data.address = req.body.address
    }
    if (req.body.country != null){
        res.data.country = req.body.country
    }
    if (req.body.state != null){
        res.data.state = req.body.state
    }
    if (req.body.zipcode != null){
        res.data.zipcode = req.body.zipcode
    }
    if (req.body.email != null){
        res.data.email = req.body.email
    }
    if (req.body.phone != null){
        res.data.phone = req.body.phone
    }
    if (req.body.height != null){
        res.data.height = req.body.height
    }
    if (req.body.weight != null){
        res.data.weight = req.body.weight
    }
    try {
        const updateData = await res.data.save()
        res.json(updateData)
    }catch (err) {
         res.status(400).json({message:err.message})
    }
    

})
router.delete('/form/delete-details/:id',getData,async (req, res) => {
    try {
        await res.data.remove()
        res.json({message:'The specified form is deleted'})
    }catch (err) {
        res.status(500).json({message:err.message})
    }

})

async function getData(req,res, next){
    
let data
try {
    data = await Data.findById(req.params.id)
    if (data == null) {
        return res.status(404).json({message:'Cannot find Data'})
    }
} catch (err) {
    return res.status(500).json ({message:err.message})
}
res.data = data
next()
}

module.exports = router