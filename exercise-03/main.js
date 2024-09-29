console.log('Numbers in ascending order');

let userNr1 = prompt('Input first number');
userNr1 = Number(userNr1);

let userNr2 = prompt('Input second number');
userNr2 = Number(userNr2);

let output = '';
for (let i = userNr1; i <= userNr2; i++) {
    output = output + i + ', ';
}

alert(output);
