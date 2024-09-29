console.log('Verify if the number provided by user is divisible by 3 and by 5');

let userNr = prompt('Input value');
userNr = Number(userNr);

if(userNr % 3 == 0 && userNr % 5 != 0){
    alert(`${userNr} is divisible by 3`); 
    alert(`${userNr} is not divisible by 5`);
}

if(userNr % 3 != 0 && userNr % 5 == 0){
    alert(`${userNr} is not divisible by 3`); 
    alert(`${userNr} is divisible by 5`);
}

if(userNr % 3 == 0 && userNr % 5 == 0){
    alert(`${userNr} is divisible by 3`); 
    alert(`${userNr} is divisible by 5`);
}

if(userNr % 3 != 0 && userNr % 5 != 0){
    alert(`${userNr} is not divisible by 3`); 
    alert(`${userNr} is not divisible by 5`);
}
