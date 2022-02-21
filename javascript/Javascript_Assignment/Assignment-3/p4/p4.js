var array_1 = [9,8,7,6,5,4,3,2];
var array_2 = [2,3,4,5,6,7,8,9];
var array_3 = [];

//Method - 1
for (let index = 0; index < array_1.length; index++) {
   array_3[index] = array_1[index] * array_2[index];
}
console.log(array_3);

//Method - 2
console.log('-----------------------------');
for (let index = 0; index < array_1.length; index++) {
    array_3.concat(array_1[index] * array_2[index]);
 }
console.log(array_3);