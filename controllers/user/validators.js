const validators = require("../../services/globalValidators");

const registerInfoValidator = (registerInformation) => {
  const return_value = {};
  validators.validateName(registerInformation.name)
    ? true
    : (return_value.name = "Name must be more than 5 characters long");
  validators.validateEmail(registerInformation.email)
    ? true
    : (return_value.email = "please provide a valid email address");
  validators.validatePassword(registerInformation.password)
    ? true
    : (return_value.password =
        "password must contain at least one upper case character, lower case character ,special character and be at least 8 characters long");

  return return_value;
};

module.exports = registerInfoValidator;
