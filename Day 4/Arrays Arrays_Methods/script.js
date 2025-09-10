// Arrays & Array Method

console.log("Arrays & Array Method")

vp1 = [1, 3, 4, 8, 2004]


// for in
console.log("\nFor Using in :")
for (let i in vp1) {
    console.log(i)
}


// for of
console.log("\nFor Using of :")
for (let j of vp1) {
    console.log(j)
}


// Concat
console.log("\nConcat :")
vp2 = [1, 3, 4, 8]
vp3 = [2004]
console.log("Array 1 vp2 :", vp2)
console.log("Array 1 vp3 :", vp3)
let v = vp2.concat(vp3)
console.log("Concat Array :", v)


// length
console.log("\nLength :")
console.log("Array vp1 :", vp1)
console.log("Length :", vp1.length)