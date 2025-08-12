const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const upload = require('./upload.config.js');


const aboutusSchema= new mongoose.Schema({
    name:{type: String, required: true},
    title: String,
    bio: String,
    profileImage: String,
    resumelink: String,
    collage: String,
    major: String,
    startYear: String,
    endYear:String
}); 

router.get('/', async (req, res) => {
        const aboutus = await Aboutus.find();
        res.status(200).json(aboutus);
    }
)

router.get('/:id', async (req, res) => {
        const aboutus = await Aboutus.findById(req.params.id);
        res.status(200).json(aboutus);
    }
)

router.post('/', upload.single('profileImage'), async (req, res) => {
        const aboutus = await Aboutus.create({
            name: req.body.name,
            title: req.body.title,
            bio: req.body.bio,
            profileImage: req.file.path,
            resumelink: req.body.resumelink,
            socialNetworks: {
                facebook: req.body.facebook,
                twitter: req.body.twitter,
                instagram: req.body.instagram,
                github: req.body.github,
                linkedin: req.body.linkedin
            }
        });
        res.status(200).json(aboutus);
    }
)
router.put('/', async (req, res) => {
        const aboutus = await Aboutus.updateOne({
            name: req.body.name,
            title: req.body.title,
            bio: req.body.bio,
            profileImage: req.body.profileImage,
            resumelink: req.body.resumelink,
            socialNetworks: {
                facebook: req.body.facebook,
                twitter: req.body.twitter,
                instagram: req.body.instagram,
                github: req.body.github,
                linkedin: req.body.linkedin
            }
        });
        res.status(200).json(aboutus);
    })
// router.put('/:id', async (req, res) => {
//         const aboutus = await Aboutus.findByIdAndUpdate(req.params.id, {
//             name: req.body.name,
//             title: req.body.title,
//             bio: req.body.bio,
//             profileImage: req.body.profileImage,
//             resumelink: req.body.resumelink,
//             socialNetworks: {
//                 facebook: req.body.facebook,
//                 twitter: req.body.twitter,
//                 instagram: req.body.instagram,
//                 github: req.body.github,
//                 linkedin: req.body.linkedin
//             }
//         },
//         {new: true}
//     );
//         res.status(200).json(aboutus);
//     })

// router.put('/:id', async (req, res) => {
//     try {
//         const updatedAbout = await Aboutus.findByIdAndUpdate(
//             req.params.id,
//             {
//                 name: req.body.name,
//                 title: req.body.title,
//                 bio: req.body.bio,
//                 profileImage: req.body.profileImage,
//                 resumelink: req.body.resumelink,
//                 socialNetworks: {
//                     facebook: req.body.facebook,
//                     twitter: req.body.twitter,
//                     instagram: req.body.instagram,
//                     github: req.body.github,
//                     linkedin: req.body.linkedin
//                 }
//             },
//             { new: true } // return the updated document
//         );

//         if (!updatedAbout) {
//             return res.status(404).json({ message: 'About not found' });
//         }

//         res.status(200).json(updatedAbout);
//     } catch (error) {
//         res.status(500).json({ message: 'Error updating about', error });
//     }
// });


// PATCH /about/:id
router.patch('/:id', async (req, res) => {
  try {
    const updatedAbout = await Aboutus.findByIdAndUpdate(
      req.params.id,
      { $set: req.body }, // Only update sent fields
      { new: true }       // Return the updated document
    );

    if (!updatedAbout) {
      return res.status(404).json({ message: 'About not found' });
    }

    res.json({
      message: 'About updated successfully',
      about: updatedAbout
    });

  } catch (error) {
    res.status(500).json({
      message: 'Error updating about',
      error: error.message
    });
  }
});





const Aboutus = mongoose.model('Aboutus', aboutusSchema);

module.exports = router;