const Validator = require("validator");
const validText = require("./valid-text");
const Campaign = require("../models/Campaign");

module.exports = function validateRegisterInput(data) {
  data.title = validText(data.title) ? data.title : "";
  data.tagline = validText(data.tagline) ? data.tagline : "";
  data.overview = validText(data.overview) ? data.overview : "";
  data.story = validText(data.story) ? data.story : "";
  data.faq = validText(data.faq) ? data.faq : "";
  data.image_url = validText(data.image_url) ? data.image_url : "";
  data.category = validText(data.category) ? data.category : "";

  if (!Validator.isLength(data.title, { min: 8, max: 32 })) {
    return {
      message: "A campaign title must be between 8 and 32 characters",
      isValid: false
    };
  }

  if (Validator.isEmpty(data.title)) {
    return { message: "A campaign title is required", isValid: false };
  }

  if (!Validator.isLength(data.tagline, { min: 8, max: 32 })) {
    return {
      message: "A campaing tagline must be between 8 and 32 characters",
      isValid: false
    };
  }

  if (Validator.isEmpty(data.tagline)) {
    return { message: "A campaign tagline is required", isValid: false };
  }

  if (!Validator.isLength(data.overview, { min: 16, max: 128 })) {
    return {
      message: "A campaing overview must be between 16 and 128 characters",
      isValid: false
    };
  }

  if (Validator.isEmpty(data.overview)) {
    return { message: "A campaign overview is required", isValid: false };
  }

  if (!Validator.isLength(data.story, { min: 16, max: 128 })) {
    return {
      message: "Campaing story must be between 16 and 128 characters",
      isValid: false
    };
  }

  if (Validator.isEmpty(data.story)) {
    return { message: "A campaign story is required", isValid: false };
  }

  if (!Validator.isLength(data.faq, { min: 16, max: 128 })) {
    return {
      message: "Campaing FAQ must be between 16 and 128 characters",
      isValid: false
    };
  }

  if (Validator.isEmpty(data.faq)) {
    return { message: "A campaign FAQ is required", isValid: false };
  }

  if (!Validator.isLength(data.image_url, { min: 16, max: 256 })) {
    return {
      message: "Campaign image URL must be between 8 and 256 characters",
      isValid: false
    };
  }

  if (Validator.isEmpty(data.image_url)) {
    return { message: "A campaign image URL is required", isValid: false };
  }

  if (!Validator.isLength(data.category, { min: 2, max: 64 })) {
    return {
      message: "A campaign category must be between 2 and 64 characters",
      isValid: false
    };
  }

  if (Validator.isEmpty(data.category)) {
    return { message: "A campaign category URL is required", isValid: false };
  }
  
  if (!Validator.isFloat(data.goal, { min: 1, max: 1000000000 })) {
    return { message: "The campaign goal must be at least $1 and less than $1,000,000,000", isValid: false };
  }
  
  if (!Validator.isAfter(data.end_date)) {
    return { message: "A campaign must have a date after today", isValid: false };
  }



  // data.raised = validText(data.raised) ? data.raised : "";
  // data.goal = validText(data.goal) ? data.goal : "";
  // data.end_date = validText(data.end_date) ? data.end_date : "";

  return {
    message: "",
    isValid: true
  };
};
