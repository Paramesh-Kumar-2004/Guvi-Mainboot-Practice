// Hoisting

console.log("Hoisting")
console.log(v) // op : undefined (When I Use var It Show undefined But Rally This is A Error Here The Hoisting Entered)
var v = "VP"

// console.log(p) // Error
let p = "V"



// Scope
/*
1. Local Scope
2. Global Scope
*/


console.log("\nScope")
let vp = 2004; // Global 

if (true) {
    let pv = "PV"
    console.log("Inside Of The Condition vp :", vp)
    console.log("Inside Of The Condition pv :", pv)
}

console.log("Outside Of The Condition vp :", vp)

