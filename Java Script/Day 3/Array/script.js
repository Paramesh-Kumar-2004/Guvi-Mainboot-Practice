let arr = ["VP", 2004, "PV"]

function PrintArr() {
    console.log("Array")
    console.log(arr)
}

function PrintArrData() {
    console.log("Array Data Using (for in)")
    for (i in arr) {
        console.log(arr[i])
    }

    console.log("Array Data Using (for of)")
    for (i of arr) {
        console.log(i)
    }
}