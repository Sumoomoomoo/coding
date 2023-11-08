let milk = "sad"
let cheese = 3
let tree = [1, 2, 3, 4]
let dog = true
let cat = false
let uggs = "false"
let yellow = undefined
let red = null
let purple = 0
let green = ""

function returnBooleanValue(x) {
    return "this will never return"
    if (x) {
        return true
    }
    console.log("this is my brain on acid")
    return false
}
console.log(returnBooleanValue(yellow))