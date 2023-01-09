let mix = ["abc", 123, "123", undefined, "undefined", null, "null", 0, "0", false, "false", true, "true"]
console.log(Array.isArray(mix))
console.log(mix)
console.log(typeof mix)
mix = ["abc", 123, undefined,, null, 0, false, true ]
console.log(Array.isArray(mix))
console.log(mix)
console.log(typeof mix)
