const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContributionSchema = new Schema({
  campaign: {
    type: Schema.Types.ObjectId,
    ref: "campaigns"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  perks: [
    {
      type: Schema.Types.ObjectId,
      ref: "perks"
    }
  ],
  amount: {
    type: Number,
    required: true,
    min: 1,
    max: 1000000000
  }
});

module.exports = Contribution = mongoose.model('contributions', ContributionSchema);
