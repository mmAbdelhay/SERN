module.exports.validateName = (name_to_validate) => {
  return /^[a-zA-Z ]*$/.test(name_to_validate) && name_to_validate.length > 5
    ? true
    : false;
};

module.exports.validateEmail = (email_to_validate) => {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email_to_validate
  )
    ? true
    : false;
};

module.exports.validatePassword = (password_to_validate) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
    password_to_validate
  )
    ? true
    : false;
};
