const student = {
  name: "Ade",
  age: 18,
  isMale: false,
  getAge:getAge,
  getGender:getGender,
  getName : getName

};
function getName(obj) {
  return obj.name;
}
function getAge(obj) {
  return obj.age;
}
function getGender(obj) {
  if (obj.isMale == true) {
    return "You are a male";
  } else {
    return "You are a female";
  }
}

const staff = {
  name: "Tade",
  age: 25,
  ismale: true,
  getAge:getAge,
  getGender:getGender,
  getName : getName
};
console.log(getAge(staff));
