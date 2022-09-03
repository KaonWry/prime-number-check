//npm packages
var prompt = require('prompt-sync')();
//Get number
var inpnum = prompt('Input the number (only integer accepted) : ');
inpnum = parseInt(inpnum);
for (let i = 1; i < inpnum; i++) {
    if (i == 1) {
        continue;
    }
    else if (i == inpnum){
        continue;
    }
    var div = inpnum / i;
    var divint = parseInt(div);
    if (div == divint) {
        console.log(inpnum + ' is not a prime number');
        process.exit()
    }
}
console.log(inpnum + ' is a prime number');