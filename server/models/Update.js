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
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: "users"
  // },
});

module.exports = Update = mongoose.model('updates', UpdateSchema);
