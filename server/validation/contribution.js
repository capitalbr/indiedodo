const Validator = require("validator");
const validText = require("./valid-text");
const Contribution = require("../models/contribution");

module.exports = function validateContributionInput(data) {
  if (!Validator.isFloat(data.amount, { min: 1, max: 1000000000 })) {
    return { message: "A contribution must be at least $1 and less than $1,000,000,000", isValid: false };
  }

  return {
    message: "",
    isValid: true
  };
};
