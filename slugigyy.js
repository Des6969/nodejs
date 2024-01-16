//write the function for conversion of title to slug
//eg:"Back-End and Web Development Trends For 2024"=>"back-end"

// const slugify = (string) => {
//   return string
//     .split(" ")
//     .map((word) => word.toLowerCase())
//     .join("-");
// };
// const result = slugify("Back-End and Web Development Trends For 2024");
// console.log({ result });

//using npm

const slugify = require("slugify");

const result = slugify("Back-End and Web Development Trends For 2024", {
  lower: true,
});

console.log({ result });
