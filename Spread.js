function sum (x,y,z){
    return x + y +z;
}
let input = [1,2,3];
// console.log(sum(...input))

// console.log(Math.max(...[-1,10 , 50 ,20 ,1000 ,1]))

let arr = [ 1,2,3]
let copiedArr = [...arr]
// console.log(copiedArr)
copiedArr.push(10)
console.log("arr",arr)
console.log("co" , copiedArr)

let cities = ["san francisco" , "Los Angeles" ];

let places = ["Miami","Chocago",...cities]
console.log(places)