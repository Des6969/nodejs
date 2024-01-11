//Create your own library(module)
// export the function out of the file
// require that file in the server file

const getHello = () => {
  console.log("hello from library");
};

const getNamaste = (name) => {
  console.log(`Namaste ${name}`);
};

const getKonichiwa = (hello) => {
  console.log(`Konichiwa ${hello}`);
};
const getBonjour = (Helllllllooo) => {
  console.log();
};
module.exports = {
  getHello,
  getNamaste,
  getKonichiwa,
};
