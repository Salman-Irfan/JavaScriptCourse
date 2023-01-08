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
class Dog extends Animal {
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed
    }
    run(){
        return `${this.name} is running at ${this.speed}`
    }
    
}
const tommy = new Dog("tommy", 3, 45)
console.log("tommy = ", tommy)
console.log("tommy.eat() = ", tommy.eat())
console.log("tommy.isCute() = ", tommy.isCute())
console.log("tommy.isSuperCute() = ", tommy.isSuperCute())
console.log("tommy.speed = ", tommy.speed)
console.log("tommy.run() = ", tommy.run())