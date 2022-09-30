var globalGreeting = "good"
function testFunction () {
    var localGreeting = "morning"
    console.log(globalGreeting)
    console.log(localGreeting)
}
testFunction()
console.log("main program")
console.log(globalGreeting)
// console.log(localGreeting) -> reference error