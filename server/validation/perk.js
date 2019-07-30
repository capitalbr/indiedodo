const Validator = require("validator");
const validText = require("./valid-text");
const Perk = require("../models/Perk");

module.exports = function validatePerkInput(data) {
  data.title = validText(data.title) ? data.title : "";
  data.description = validText(data.description) ? data.description : "";
  data.inventory_info = validText(data.inventory_info) ? data.inventory_info : "";
  data.shipping_info = validText(data.shipping_info) ? data.shipping_info : "";
  data.est_shipping = validText(data.est_shipping) ? data.est_shipping : "";
  data.image_url = validText(data.image_url) ? data.image_url : "";
  data.option = validText(data.option) ? data.option : "";

  if (!Validator.isFloat(data.cost, { min: 1, max: 1000000000 })) {
    return { message: "The perk cost must be at least $1 and less than $1,000,000,000", isValid: false };
  }

  if (!Validator.isLength(data.title, { min: 8, max: 32 })) {
    return {
      message: "A perk title must be between 8 and 32 characters",
      isValid: false
    };
  }

  if (Validator.isEmpty(data.title)) {
    return { message: "A perk title is required", isValid: false };
  }

  if (!Validator.isLength(data.description, { min: 8, max: 64 })) {
    return {
      message: "A perk description must be between 8 and 64 characters",
      isValid: false
    };
  }

  if (Validator.isEmpty(data.description)) {
    return { message: "A perk description is required", isValid: false };
  }

  if (!Validator.isLength(data.inventory_info, { min: 16, max: 64 })) {
    return {
      message: "Inventory information is required",
      isValid: false
    };
  }

  if (Validator.isEmpty(data.inventory_info)) {
    return { message: "Inventory information is required", isValid: false };
  }

  if (!Validator.isLength(data.shipping_info, { min: 16, max: 64 })) {
    return {
      message: "Shipping information must be between 16 and 64 characters",
      isValid: false
    };
  }

  if (Validator.isEmpty(data.shipping_info)) {
    return { message: "Shipping information is required", isValid: false };
  }

  if (!Validator.isLength(data.est_shipping, { min: 16, max: 64 })) {
    return {
      message: "A shipping estimate must be between 16 and 64 characters",
      isValid: false
    };
  }

  if (Validator.isEmpty(data.est_shipping)) {
    return { message: "A shipping estimate is required", isValid: false };
  }

  

  if (!Validator.isLength(data.image_url, { min: 8, max: 256 })) {
    return {
      message: "A perk image URL must be between 8 and 256 characters",
      isValid: false
    };
  }

  if (Validator.isEmpty(data.image_url)) {
    return { message: "A perk image URL is required", isValid: false };
  }

  return {
    message: "",
    isValid: true
  };
};
