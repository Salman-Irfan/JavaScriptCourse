class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`; 
    }
    isSuperCute(){
        return this.age < 1;
    }
    isCute(){
        return true;
    }
}
const animal1 = new Animal("tom", 2)
console.log("animal1 = ", animal1)
console.log("animal1.eat() = ", animal1.eat())
console.log("animal1.isCute() = ", animal1.isCute())
console.log("animal1.isSuperCute() = ", animal1.isSuperCute())

// dog class
class Dog {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`; 
    }
    isSuperCute(){
        return this.age < 1;
    }
    isCute(){
        return true;
    }    
}
const tommy = new Dog("tommy", 3)
console.log("tommy = ", tommy)
console.log("tommy.eat() = ", tommy.eat())
console.log("tommy.isCute() = ", tommy.isCute())
console.log("tommy.isSuperCute() = ", tommy.isSuperCute())