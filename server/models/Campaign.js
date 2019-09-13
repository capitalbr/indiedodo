const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampaignSchema = new Schema({
  title: {
    type: String,
    // required: true
  },
  tagline: {
    type: String,
    // required: true
  },
  overview: {
    type: String,
    // required: true
  },
  story: {
    type: String,
    // required: true
  },
  faq: {
    type: String,
    // required: true
  },
  image_url: {
    type: String,
    // required: true
  },
  youtube_url: {
    type: String
  },
  real_url: {
    type: String
  },
  category: {
    type: String,
    // required: true
  },
  goal: {
    type: Number,
    // required: true,
    // min: 1,
    // max: 1000000000
    default: 1000
  },
  end_date: {
    type: Date,
    // required: true,
    default: '2020-12-31'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  featured: {
    type: Schema.Types.Boolean,
    default: false
  },
  trending: {
    type: Schema.Types.Boolean,
    default: false
  }
});

module.exports = Campaign = mongoose.model('campaigns', CampaignSchema);
