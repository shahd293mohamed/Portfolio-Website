const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const contactusSchema = new mongoose.Schema({
    name: String,
      email:{
        type: String,
        match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        required: true,
        unique: true,
        lowercase: true,
    },
    phone: String,
    message: String,
    date : { type: Date, default: Date.now },
    isdeleted: {
        type: Boolean,
        default: false
    }
});

const myContactSchema = new mongoose.Schema({
    email: String,
    linkedin: String,
    github: String,
    phone: String
});



router.get('/mycontact', async (req, res) => {
        const mycontact = await  Mycontact.find();
        res.status(200).json(mycontact);
    })



router.post('/mycontact', async (req, res) => {
        const mycontact = await Mycontact.create({
            email: req.body.email,
            linkedin: req.body.linkedin,
            github: req.body.github,
            phone: req.body.phone
        });
        res.status(200).json(mycontact);
    })
router.put('/mycontact', async (req, res) => {
        const contactus = await Contactus.updateone({
            email: req.body.email,
            linkedin: req.body.linkedin,
            github: req.body.github,
            phone: req.body.phone
        });
        res.status(200).json(contactus);
    })



router.get('/contactus', async (req, res) => {
        const contactus = await Contactus.find();
        res.status(200).json(contactus);
    })

router.post('/contactus', async (req, res) => {
        const contactus = await Contactus.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message
        });
        res.status(200).json(contactus);
    })
router.put('/contactus', async (req, res) => {
        const contactus = await Contactus.updateone({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message
        });
        res.status(200).json(contactus);
    })

const Contactus = mongoose.model('Contactus', contactusSchema);
const Mycontact = mongoose.model('Mycontact', myContactSchema);

module.exports = router