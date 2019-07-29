const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PerkSchema = new Schema({
  campaign: {
    type: Schema.Types.ObjectId,
    ref: "campaigns"
  },
  cost: {
    type: Number,
    required: true,
    min: 1,
    max: 1000000000
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  inventory_info: {
    type: String,
    required: true
  },
  shipping_info: {
    type: String,
    required: true
  },
  est_shipping: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  option: {
    type: String,
    required: true
  }
});

module.exports = Perk = mongoose.model('perks', PerkSchema);
