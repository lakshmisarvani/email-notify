const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  usage: {
    type: Number,
    default: 0, // Current usage (e.g., in units, cost, or requests)
  },
  limit: {
    type: Number,
    required: true, // Maximum allowed usage (e.g., 1000 units/month)
  },
  alertSent: {
    type: Boolean,
    default: false, // Tracks if alert email has been sent
  },
  lastAlertDate: {
    type: Date, // Tracks when the last alert was sent (optional for reset logic)
  },
});

module.exports = mongoose.model('Project', projectSchema);