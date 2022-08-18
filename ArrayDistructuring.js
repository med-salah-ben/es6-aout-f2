// assigning arr items to var
const [a,b,c] = [1,"sec",true]
// console.log(c)

// skipping items
const [,,z] = [55 , "be" ,true]
// console.log(z)

// assigning the first value , storing the rest together
const [g,...rest] = [365 , "year" ,false , "hi" ,1,true,"zhjzad"]
// console.log(g)
// console.log(rest)

//swapping var = change it

let x = true ;
let y = false ;
[x,y] = [y,x]
console.log(y)