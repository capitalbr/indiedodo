const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  campaign: {
    type: Schema.Types.ObjectId,
    ref: "campaigns"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
});

module.exports = Comment = mongoose.model('comments', CommentSchema);
