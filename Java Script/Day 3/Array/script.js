let arr = ["VP", 2004, "PV"]

function PrintArr() {
    console.log("Array")
    console.log(arr)
}

function PrintArrData() {
    console.log("Array Data")
    for (i in arr) {
        console.log(arr[i])
    }
}