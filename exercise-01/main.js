console.log('Input distance in kilometers. Display distance in miles.');

let userNr = prompt('Input value: ');
userNr = Number(userNr);

let Nr = Number(0.62)

let prod = userNr * Nr;

alert(`${userNr} km = ${prod} miles`);
