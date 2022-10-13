const person = {
    name: `salman`,
    age: 23,
    "person hobbies": ["abc", "def", 123]
};
console.log(person);
console.log(person["person hobbies"]);
console.log(typeof person["person hobbies"]);
console.log(Array.isArray(person["person hobbies"]));
console.log(Array.isArray(person));

// how to add key value pain in objects
const key = "email";

person.gender = "male";
console.log(person);

person[key] = "salmanirfan674@gmail.com"
console.log(person);
console.log(person["email"]);