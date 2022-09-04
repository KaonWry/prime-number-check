//npm packages
var prompt = require('prompt-sync')();
//Get number
var inpnum = prompt('Input the number (only integer accepted) : ');
inpnum = parseInt(inpnum);
//1 is neither prime nor composite
if (inpnum == 1) {
    console.log('1 is neither prime nor composite number');
    process.exit();
}
for (let i = 1; i < inpnum; i++) {
    //If the itteration is either 1 or the number specified,  skip the itteration
    if (i == 1) {
        continue;
    }
    else if (i == inpnum){
        continue;
    }
    //If number can be divided into whole number, then it's not a prime number
    if (inpnum % i == 0) {
        console.log(inpnum + ' is not a prime number');
        process.exit();
    }
}
console.log(inpnum + ' is a prime number');