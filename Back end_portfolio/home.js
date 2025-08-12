const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const upload = require('./upload.config.js');

const HomeSchema = new mongoose.Schema({
    name:String,
    bio:String,
    image:String,
})

router.get('/', async (req, res) => {
        const home = await Home.find();
        res.status(200).json(home);
    }
)
router.get('/:id', async (req, res) => {
        const home = await Home.findById(req.params.id);
        res.status(200).json(home);
    }
)
router.post('/', upload.single('image'), async (req, res) => {
        const home = await Home.create({
            name: req.body.name,
            bio: req.body.bio,
            image: req.file ? req.file.filename : '',
        });
        res.status(200).json(home);
    })
router.put('/', async (req, res) => {
        const home = await Home.updateOne({
            name: req.body.name,
            bio: req.body.bio,
        });
        if (req.file) {
            updatedData.image = req.file.filename;
        }
        res.status(200).json(home);
    })
router.put('/:id', upload.single('image'), async (req, res) => {
        const updatedData = {
            name: req.body.name,
            bio: req.body.bio,
        };
        if (req.file) {
            updatedData.image = req.file.filename;
        }

        const home = await Home.findByIdAndUpdate(req.params.id, updatedData, { new: true });
        res.status(200).json(home);
    })

const Home = mongoose.model('Home', HomeSchema);

module.exports = router