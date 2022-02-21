document.write(
  "<br/>" +
    "++++++++++++++++========================== Arrays in javaScript ===================================+++++++++" +
    "<br/>"
);

const cars = ["toyota", "honda", "kia"];

document.write(" array property Length  " + cars.length);
document.write("<br/>" + " array property Index  " + cars[1]);
for (let x of cars) {
  document.write("<br/>" + " for of loop in Array  " + x);
}
for (let x in cars) {
  document.write("<br/>" + " for in loop in Array  " + x);
}
cars.push("suzuki");
document.write(
  "<br/>" + " after using push in array add data from end of an array " + cars
);
cars.pop();
document.write(
  "<br/>" + " after using pop in array remove data from end of an array " + cars
);
cars.shift();
document.write(
  "<br/>" +
    " after using shift in array remove data from front of array " +
    cars
);
cars.unshift("suzuki", "toyota");
document.write(
  "<br/>" + " after using unshift add data in front of array" + cars
);
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sum(total, number) {
  return total - number;
}
document.write(
  "<br/>" +
    " after using reduce which gives single value of array from left to right  " +
    num.reduce(sum)
);
document.write(
  "<br/>" +
    " after using reduceRight which gives single value of array from Right to left " +
    num.reduceRight(sum)
);
const result = cars.filter((car) => car.length > 5);
document.write(
  "<br/>" + " after using filter passes through the test of length" + result
);
const data = num.map((x) => x * 2);
document.write(
  "<br/>" +
    " after using map gives output of array with multiply by 2 =>  " +
    data
);
function result1(num1) {
  return num1 > 8;
}
document.write(
  "<br/>" +
    " after using find output is greater than 8 " +
    num +
    " answer => " +
    num.find(result1)
);

document.write(
  "<br/>" + " after using indexOf in array " + cars.indexOf("honda")
);
const result2 = cars.concat(num);
document.write("<br/>" + " after using concat in array " + result2);
cars.splice(2, 0, "hundai");
document.write(
  "<br/>" +
    " after using splice in arrays first define index and then how many item remove  " +
    cars
);
const Slice = cars.slice(2);
document.write(
  "<br/>" +
    " after using slice in arrays which creates new array from given index " +
    Slice
);
document.write(
  "<br/>" +
    "============================= Spread Operator =================================="
);
arr = [...cars, ...num];
document.write(
  "<br/>" + " after using spread operator instead of concat " + arr
);
arr2 = [...arr];
arr2.push(10);
document.write("<br/>" + " after using spread operator with push " + arr2);
arr3 = [...arr2, data];

document.write("<br/>" + " after using spread operator with expand " + arr3);
document.write(
  "<br/>" +
    "============================= Deep Copy Of an Array =================================="
);
numCopy = [...num];
document.write("<br/>" + numCopy + " created a copy of num Array ");
numCopy.push(122);
document.write("<br/>" + numCopy + " push element in numCopy Array ");
console.log(num);
document.write("<br/>" + num + " Original array  not affected ");
document.write("<br/>" + "======== with use of simple way =======");
const nestedArray = [1, [num], 2];
const nestedCopy = JSON.parse(JSON.stringify(nestedArray));
document.write("<br/>" + nestedCopy + " copy array ");
nestedCopy[1][0] = "122";
document.write("<br/>" + nestedCopy + " after changing in copy ");
document.write("<br/>" + nestedArray + " original not affected ");
document.write(
  "<br/>" +
    "++++++++++++++++========================== Objects in javaScript ===================================+++++++++"
);

const obj = { color: "red" };
objectArgument = (object) => {
  object.color = "blue";
};
objectArgument(obj);
document.write("<br/>" + "object as Argument  " + obj.color);

const car = {
  start(hello) {
    document.write("<br/>" + "Object methods engine started!  " + hello);
  },
  end() {
    document.write("<br/>" + "engine Ended ");
  },
};
car.start("lovely");
car.end();
// initializer is to initialize like const car;  and assignment means for add some value like car = 1;
// name restriction in object properties is u can just add name of property as a string
document.write(
  "<br/>" +
    "checking age property in object with hasOwnProperty  " +
    obj.hasOwnProperty("age")
);
const obj2 = {
  name: "nabeel",
  ...obj,
};
document.write("<br/>" + "Object with spread operator  " + obj2.color);
for (let x in obj2) {
  document.write(
    "<br/>" + "for in loop in object property  " + `${x}: ${obj2[x]}`
  );
}
obj2.age = 12;
document.write("<br/>" + "adding new property  " + obj2.age);

delete obj.name;
document.write("<br/>" + "deleting property " + obj.name);
const copyObj = (Object) => {
  let copiedObject = {};
  for (let x in Object) {
    copiedObject[x] = Object[x];
  }
  return copiedObject;
};
copyObj(obj2);
console.log(copyObj(obj2));
console.log(obj2);
const alphabets = {
  a: "a",
  b: "b",
  c: "c",
  d: "d",
  e: "e",
};
const { a, b, ...rest } = alphabets;
console.log(rest);
const variable = "g";
const var2 = "h";
const g = { variable, var2 };
document.write(
  "<br/>" +
    "shorthand property name syntax for object creation " +
    JSON.stringify(g)
);
console.log(g);
const user = {
  firstName: "nabeel",
  lastName: "Hussain",
  fullName() {
    return this.firstName + " " + this.lastName;
  },
};
document.write("<br/>" + "this keyword" + JSON.stringify(user.fullName()));
const cat = {
  _name: "tom",
  get catName() {
    return this._name;
  },
  set catName(newName) {
    this._name = newName;
  },
};
cat.catName = "jerry";

document.write(
  "<br/>" + "getters and setters for restricted use _ " + cat._name
);
const outupt1 = Object.assign(obj2, alphabets, cat, g, car, obj);
document.write(
  "<br/>" +
    "Object .assign obj2 values are change due to assign target " +
    JSON.stringify(outupt1)
);
for (const [key, value] of Object.entries(alphabets)) {
  console.log();
  document.write("<br/>" + "Object .entries " + `${key}:${value}`);
}
const usingKeys = Object.keys(obj2);
document.write("<br/>" + "Object .keys " + usingKeys);
console.log(obj2);
const usingValues = Object.values(obj2);
document.write("<br/>" + "Object .values " + JSON.stringify(usingValues));
console.log(obj2);
const _getOwnPropertyNames = Object.getOwnPropertyNames(alphabets);
document.write("<br/>" + "Object .getOwnPropertyNames " + _getOwnPropertyNames);
