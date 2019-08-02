
var star = '*';
star = star++;
console.log(star); // NAN

var star = '*';
star += star;
console.log(star); // **

var star = '*';
star =+ star;
console.log(star); // NAN
