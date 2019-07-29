// const Validator = require("validator");
// const validText = require("./valid-text");
// const Comment = require("../models/Comment");

// module.exports = function validateCommentInput(data) {
//   data.body = validText(data.body) ? data.body : "";

//   if (!Validator.isLength(data.body, { min: 4, max: 64 })) {
//     return {
//       message: "A comment body must be between 4 and 64 characters",
//       isValid: false
//     };
//   }

//   return {
//     message: "",
//     isValid: true
//   };
// };
