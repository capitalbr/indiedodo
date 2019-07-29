const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UpdateSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  campaign: {
    type: Schema.Types.ObjectId,
    ref: "campaigns"
  },
});

module.exports = Update = mongoose.model('updates', UpdateSchema);
