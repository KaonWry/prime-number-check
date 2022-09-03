//npm packages
var prompt = require('prompt-sync')();
//Get number
var mason = prompt('Input the number (only integer accepted) : ');
mason = parseInt(mason);
for (let i = 1; i < mason; i++) {
    if (i == 1) {
        continue;
    }
    else if (i == mason){
        continue;
    }
    var div = mason / i;
    var divint = parseInt(div);
    if (div == divint) {
        console.log(mason + ' is not a prime number');
        process.exit()
    }
}
console.log(mason + ' is a prime number');