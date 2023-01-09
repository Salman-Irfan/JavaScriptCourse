const person = {
    name: `salman`,
    age: 23,
    "person hobbies": ["abc", "def", 123]
};

//for in loop
//Object.keys

for (let key in person){ //for in loop
    // console.log(person[key]) //o/p -> name, age, person hobbies
    console.log(key) //o/p -> name, age, person hobbies
    console.log(person[key]) //o/p -> salman, 23, "abc, def, 123"
}


console.log(Object.keys(person));