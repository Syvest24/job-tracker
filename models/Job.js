const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  company: { type: String, required: true },
  recruiter: String,
  appliedDate: { type: Date, default: Date.now },
  status: { 
    type: String, 
    enum: ['Applied', 'Interviewing', 'Offer', 'Rejected'],
    default: 'Applied'
  },
  progress: {
    type: Number,
    enum: [0, 33, 66, 100],
    default: 0
  },
  notes: String
});

module.exports = mongoose.model('Job', jobSchema);
