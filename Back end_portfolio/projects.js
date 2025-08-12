const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const upload = require('./upload.config.js');

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    catagory: String,
    technologies: [String], 
    demoLink: { type: String },       
    githubLink: { type: String },
    date: { type: Date, default: Date.now }, 
    isdeleted:{
        type: Boolean,
        default: false
    }
});

router.get('/', async (req, res) => {
        const projects = await Project.find();
        res.status(200).json(projects);
    })

router.get('/:id', async (req, res) => {
        const project = await Project.findById(req.params.id);
        res.status(200).json(project);
    })

router.get('/:catagory', async (req, res) => {
        const projects = await Project.find({catagory: req.params.catagory});
        res.status(200).json(projects);
    })
router.get('/:technology', async (req, res) => {
        const projects = await Project.find({technologies: req.params.technology});
        res.status(200).json(projects);
    })

router.post('/', upload.single('image'), async (req, res) => {
        const project = await Project.create({
            title: req.body.title,
            description: req.body.description,
            image: req.file ? req.file.filename : '',
            catagory: req.body.catagory,
            technologies: req.body.technologies,
            demoLink: req.body.demoLink,
            githubLink: req.body.githubLink
        });
        res.status(200).json(project);
    })
router.post('/', upload.single('image'), async (req, res) => {
        const project = await Project.insertMany(req.body);
        res.status(201).json(project);
})

router.put('/', async (req, res) => {
        const project = await Project.updateOne({
            title: req.body.title,
            description: req.body.description,
            catagory: req.body.catagory,
            technologies: req.body.technologies,
            demoLink: req.body.demoLink,
            githubLink: req.body.githubLink,
            isdeleted: req.body.isdeleted
        });
         if (req.file) {
        updatedData.image = req.file.filename;
    }
        res.status(200).json(project);
    })

    
router.put('/:id', upload.single('image'), async (req, res) => {
    const updatedData = {
        title: req.body.title,
        description: req.body.description,
        catagory: req.body.catagory,
        technologies: req.body.technologies.split(','),
        demoLink: req.body.demoLink,
        githubLink: req.body.githubLink
    };
    if (req.file) {
        updatedData.image = req.file.filename;
    }

    const project = await Project.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    res.status(200).json(project);
});


router.delete('/:id', async (req, res) => {
        const project = await Project.findByIdAndDelete(req.params.id, {isdeleted: true},{new: true});
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        else    
            res.status(200).json(project);
    })

const Project = mongoose.model('Project', projectSchema);

module.exports = router