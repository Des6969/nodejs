//Write a function that takes two parameters (userrole,roles)
//return type true or false based on role check

// const userRole = ["admin", "vendor"];
// const roles = ["vendor", "inventorymanager", "receptionist"];
// //map use garesi array dincha
// const checkRole = (userRole, roles) => {

//   return roles.includes(userRole);

// };
// const check = checkRole(userRole, roles);

// console.log(check);
//sir
const userRole = ["admin", "vendor"];
const roles = ["vendor", "inventorymanager", "receptionist"];
//map use garesi array dincha
const checkRole = (userRoles, roles) => {
  const check = roles.map((role) => userRoles.includes(role));
  return check.includes(true);
};

const check = checkRole(userRoles, roles);

console.log(check);
