const Validator = require("validator");
const validText = require("./valid-text");
const Update = require("../models/Update");

module.exports = function validateUpdateInput(data) {
  data.body = validText(data.body) ? data.body : "";

  if (!Validator.isLength(data.body, { min: 4, max: 128 })) {
    return {
      message: "A comment body must be between 4 and 128 characters",
      isValid: false
    };
  }

  return {
    message: "",
    isValid: true
  };
};
