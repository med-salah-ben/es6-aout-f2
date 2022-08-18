console.log("hello from main.js");

//function declaration

function square(x,y){
    return x * y
}

console.log("x * y = ",square(5,3));

//function expression

const add = function(a){
    return a + a
}

console.log("a + a = ",add(6))

//arrow function

const sub = (x,y) => {
    return x - y
}

console.log("x - y = ",sub(12,5));

const sub2 = (x,y) => x-y

console.log("SUB2 : x - y = ", sub2(20,10))

let people = [
    {name:"majed" , age :28},
    {name:"slh" , age :27},
    {name:"oumaima" , age :23},
    {name:"firas" , age :27},
    {name:"firas" , age :26}

]

let ageSum = people.filter(function(person){
    return person.age > 25 && person.age <28
}).filter(function(person){
    return person.name === "firas"
}).map(function(person){
    return person.age
})

console.log(ageSum)