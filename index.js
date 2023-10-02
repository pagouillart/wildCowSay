const {student} = require('./information');
console.log(`Hi, my name is ${student.name} from ${student.campus}`);


var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, my name is ${student.name} from ${student.campus}`,
    e : "00",
    T : "X "
}));