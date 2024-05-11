const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user');
const Experience = require('./models/experience');
const Education = require('./models/education');
const Projects = require('./models/projects');

const app = express();

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/my_database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/experience', async (req, res) => {
  try {
    const experience = await Experience.find();
    res.json(experience);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/education', async (req, res) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/projects', async (req, res) => {
  try {
    const projects = await Projects.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to fetch project details by ID
app.get('/projects/:_id', async (req, res) => {
  try {
    const project = await Projects.findById(req.params._id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




app.delete('/projects/:id', async (req, res) => {
  try {
    const project = await Projects.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put('/projects/:id', async (req, res) => {
  try {
    const projectId = req.params.id;
    const updatedProjectData = req.body; // Assuming the entire updated project object is sent in the request body
    await Projects.findByIdAndUpdate(projectId, updatedProjectData);
    res.status(200).send('Project updated successfully');
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.post('/projects', async (req, res) => {
  try {
    const newProject = req.body; // Assuming the entire project object is sent in the request body
    const createdProject = await Projects.create(newProject);
    res.status(201).json(createdProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


app.post('/users', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    contactInfo: req.body.contactInfo
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the MEAN stack application!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


