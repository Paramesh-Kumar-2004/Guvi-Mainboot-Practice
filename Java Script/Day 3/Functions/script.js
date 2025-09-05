
function Add(v, p) {
    console.log("V + P :", v + p)
}
console.log("Without Return")
Add(1, 3)
Add(4, 8)


function Pow(v, p) {
    return v ** p
}
console.log("\nWith Return")
console.log("Power :", Pow(4, 8))


function UserId() {
    return Math.floor(Math.random() * 10001)
}
console.log("\nUserId Using Random :", UserId())


function ReturnObject() {
    return {
        name: "VP",
        age: 20
    }
}
console.log("\nObject Function :\n", ReturnObject())


function ReturnArray() {
    return ["VP", 2004, "PV"]
}
console.log("\nArray Function :\n", ReturnArray())
