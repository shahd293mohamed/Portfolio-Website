const express = require("express"); 
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/portfolioNTI").then
(() => console.log("Database connected"))
.catch(err => console.log(err));


const Home = require("./home.js");
const aboutus = require("./aboutus.js");
const projects = require("./projects.js");
// const testmonials = require("./testmonilas.js");
const contactus = require("./contactus.js");
const skill = require("./skills.js");
const services = require("./services.js");



app.use("/home", Home);
app.use("/aboutus", aboutus);
app.use("/projects", projects);
// app.use("/testmonials", testmonials);
app.use("", contactus);
app.use("/skills", skill);
app.use("/services", services);
app.use('/image', express.static('images'));





app.get('/aboutus', (req, res) => {
  res.json({ name: "Test Name" });
});



app.listen(port, () => {
        console.log(`server is running on port ${port}`)
        
    })