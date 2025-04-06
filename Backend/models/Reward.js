const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String, // e.g. "Query Solver of the Month"
  description: String,
  pointsAwarded: Number,
  issuedAt: { type: Date, default: Date.now },
  redeemed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Reward', rewardSchema);
