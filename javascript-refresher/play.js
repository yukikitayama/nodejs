const hobbies = ["Sports", "Cooking"];

// const copiedArray = hobbies.slice();
const copiedArray = [...hobbies];

console.log(copiedArray);

const person = {
  name: 'Yuki',
  age: 33,
  greet() {
    console.log("Hi, I'm " + this.name);
  }
};

const copiedPerson = {...person};

console.log(copiedPerson);

// const toArray = (arg1, arg2, arg3) => {
//   return [arg1, arg2, arg3];
// };

const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3));
console.log(toArray(1, 2, 3, 4));

