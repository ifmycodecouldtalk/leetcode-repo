/**
 * @param {string} password
 * @return {number}
 */
var strongPasswordChecker = function (password) {
  // if password is less than 6 or more than 20, then steps are needed to bring to this
  // one lower, one upper, one digit needed. this is a 'checklist' of sorts. say the password
  // has 5 length, but only consists of !!!!!. well one step is needed to bring to 6 (adding a digit for example) and then
  // two more steps to add a lower and upper. However, if it were 1aAa2, then only one step is needed.
  let steps = 0;
  let checkCasesAndDigits = {
    lower: false,
    upper: false,
    digit: false,
    truths: 0,
  };
  let checkLength = {
    minReq: false,
    maxReq: false,
  };
  let checkRepeater = false;
  // lets check the checklist
  for (let i = 0; i < password.length; i++) {
    if (!/^[a-z0-9]+$/i.test(password[i])) continue;
    if (!isNaN(password[i] * 1)) {
      checkCasesAndDigits.digit = true;
    } else {
      if (password[i] == password[i].toUpperCase()) {
        checkCasesAndDigits.upper = true;
      }
      if (password[i] == password[i].toLowerCase()) {
        checkCasesAndDigits.lower = true;
      }
    }
  }
  checkCasesAndDigits.truths =
    checkCasesAndDigits.lower +
    checkCasesAndDigits.upper +
    checkCasesAndDigits.digit;

  // Rule:  if length = 5 and truths = 0, steps = 3
  //        if length = 5 and truths = 1, steps = 2
  //        if length = 5 and truths = 2+, steps = 1
  //        if length = 4 and truths = 0, steps = 3
  //        if length = 4 and truths = 1+, steps = 2
  //        if length = 3, steps always equals 3.

  if (password.length <= 3) steps = 6 - password.length;

  if (password.length == 5 || password.length == 4) {
    let magic = 3 - checkCasesAndDigits.truths - (6 - password.length);
    if (magic < 0) magic = 0;

    steps = 6 - password.length + magic;
  }
  console.log(steps);
};
strongPasswordChecker("!!!!!");
