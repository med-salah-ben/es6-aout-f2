// Var 

function testVar() {
    //var x 
    var x = 10 ;
    // console.log("first X" , x)
    // var x = 5
    // console.log(x)
    if( true) {
        var x = 15;
        console.log("inBlock :" + x)
    }
    
    console.log("Out of block",x)
}
// testVar()


function testLet() {
    let x = 10 ;
    // console.log("first", x)
    x = 20 ;
    // console.log("sec", x)
    x = 30 ;
    // console.log("third" , x)
    if(true){
        let y = 8 ;
        console.log("inBlock" , y)
    }
    // let y = 10;
    console.log("outOFblock", y)
}

// testLet()

//premitive data
const x = 7 ;
//  x = 10 ;
// var x = 20 ;

// console.log(x)

// non premitive data

//object exp :

const obj ={};
// obj = {name:"foulen",age:18}
obj.name = "majed"
obj.age = 22
obj.name = "oumaima"
obj.age = 23

// console.log(obj.name)

//Array exp :
const arr = [1,2,3];
// arr = [1,2,3];
arr.pop();

console.log(arr)