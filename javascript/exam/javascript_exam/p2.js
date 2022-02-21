for (let i = 0; i < 10; i++) {
    var numberArray = [0,1,2,3,4,5,6,7,8,9];
var letterArray = ['a','b','c','d','e'];


var x = new Array();
var y = [];


x = [numberArray[(parseInt(Math.random()* 10))],letterArray[(parseInt(Math.random()* 5))]];
// console.log(x);
y = [numberArray[(parseInt(Math.random()* 10))],letterArray[(parseInt(Math.random()* 5))]];
// console.log(y);
thirdArray = y[(parseInt(Math.random()* 2))];


x.push(thirdArray);

// console.log(x);

newArray = [];
while (x.length>0) {
    var index = parseInt(Math.random()*x.length);
    // console.log(index);
    var value = x[index];
    newArray.push(value);
    x.splice(index,1);
}
console.log(newArray);


}