// question 1
// ---------------------------------------------------------

let fruits=["apple", "banana", "orange", "grape"]
fruits.push("kiwi")
fruits.pop()
fruits.unshift("lemon")
fruits.shift()
let index=fruits.indexOf("orange");
console.log(index);
//your question is wrong ..if need output ->['lemon', 'orange'] after using slice()method 
// then we have to shift twice the fruits array and unshift again "lemon"
fruits.shift()
fruits.shift()
fruits.unshift("lemon")
// console.log(fruits);
let citrus=fruits.slice(0,2)
console.log(citrus);



// question 2
// -----------------------------------------------------
let person = {
    name: "Malaya Ranjan Dani",
    age: 25,
    address: "Bangalore",
  };
  console.log(person.name);
  console.log(person.age);
  console.log(person.address);

  person.age = 30;
  person.email = "malayadani@gmail.com";
  delete person.address;
  console.log(person);
