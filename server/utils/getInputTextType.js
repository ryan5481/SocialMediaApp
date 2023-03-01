const GetInputTextType = (loginInputText) => {
  let fieldType;

  if (loginInputText.includes("@") && loginInputText.includes(".")) {
    fieldType = "email";
  } else if (Object.is(parseInt(loginInputText, 10), NaN)) {
    fieldType = "userName";
  } else {
    fieldType = "phoneNumber";
  }
  return fieldType;
};

module.exports = GetInputTextType;
