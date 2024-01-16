//encrypting a passoword using bcrypt
//promise
const bcryptjs = require("bcryptjs");

const encryptPw = (string) => {
  return bcryptjs.hashSync(string, 10);
};
const hashedPw = encryptPw("password");

const comparePw = (string, hash) => {
  return bcryptjs.compareSync(string, hash);
};
const isValidPw = comparePw("passwordss", hashedPw);
console.log({ isValidPw });
