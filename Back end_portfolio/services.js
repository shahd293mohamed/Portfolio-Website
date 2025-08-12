const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const upload = require('./upload.config.js');

const servicesSchema = new mongoose.Schema({
    title:String,
    description:String,
    icon:String,
});

router.get('/', async (req, res) => {
        const services = await Services.find();
        res.status(200).json(services);
    }
)
router.get('/:id', async (req, res) => {
        const services = await Services.findById(req.params.id);
        res.status(200).json(services);
    }
)

router.post('/', async (req, res) => {
        const services = await Services.create({
            title: req.body.title,
            description: req.body.description,
            icon: req.body.icon,
        });
        res.status(200).json(services);
    })
router.put('/', async (req, res) => {
        const services = await Services.updateOne({
            title: req.body.title,
            description: req.body.description,
            icon: req.body.icon,
        });
        res.status(200).json(services);
})
router.put('/:id', async (req, res) => {
        const services = await Services.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            description: req.body.description,
            icon: req.body.icon,
        });
        res.status(200).json(services);
})

const Services = mongoose.model('Services', servicesSchema);

module.exports = router