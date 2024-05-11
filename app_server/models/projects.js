// models/user.js
const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({
  proj_name: String,
  when: String,
  date_completed: Date,
  thumb_desc: String,
  full_desc: String,
  git_link: String,
  type: Number
}, { collection: 'projects' });

module.exports = mongoose.model('projects', projectsSchema);
