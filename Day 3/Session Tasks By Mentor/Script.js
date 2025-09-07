// 1. print the numbers from 1 to 100 with the interval of 10
console.log("1. print the numbers from 1 to 100 with the interval of 10");
for (var i = 0; i <= 100; i += 10) {
  console.log(i);
}

// 2. print the number from 10 to 1
console.log("2. print the number from 10 to 1");
for (var j = 10; j >= 1; j -= 1) {
  console.log(j);
}

// 3. print the multiple of 2 until 10
console.log("3. print the multiple of 2 until 10");

for (var k = 1; k <= 10; k++) {
  console.log(k * 2);
}

// 4. print the number from 100 to 1 with the difference of 10.
console.log("4. print the number from 100 to 1 with the difference of 10.");
for (let l = 100; l >= 1; l -= 10) {
  console.log(l);
}

// 5. write a Function to print the eligble, Not eligble voters separately from the list of array (18,17, 16, 15, 10,8,7,9,35,40,86,75,0). Note: print invalid if the voter age is 0.
console.log(
  "5. write a Function to print the eligble, Not eligble voters separately from the list of array (18,17, 16, 15, 10,8,7,9,35,40,86,75,0). Note: print invalid if the voter age is 0."
);

var invalid = []
var eligble = []
var notEligble = []

function Voting(arr) {
  for (let m = 0; m <= arr.length - 1; m++) {
    if (arr[m] === 0) {
      invalid.push(arr[m])
    }
    else if (arr[m] < 18) {
      notEligble.push(arr[m])
    }
    else {
      eligble.push(arr[m])
    }
  }

  console.log("Invalid     : ", invalid)
  console.log("Eligble     : ", eligble)
  console.log("Not Eligble : ", notEligble)
}


Voting([18, 17, 16, 15, 10, 8, 7, 9, 35, 40, 86, 75, 0])