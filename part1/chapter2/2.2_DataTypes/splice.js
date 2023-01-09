const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(`simple ->                ${fruits}`);
//splice (index, howmany delete, "new values")
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(`2, 0, "Lemon", "Kiwi" => ${fruits}`);
fruits.splice(2, 3, "peach", "pome");
console.log(`2, 3, "peach", "pome" => ${fruits}`);
fruits.splice(2, 4, "melon", "straw");
console.log(`2, 4, "melon", "straw" => ${fruits}`);

//splice to remove 
fruits.splice(1, 2);
console.log(`1, 2 => ${fruits}`);
