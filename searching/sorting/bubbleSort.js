// var array = [2,1,6,5,9,7,11,78,0,0,0.111,1,1,1,5,5,100,1]
// for (let i = 0; i < array.length; i++) {
//     for (let j = i+1; j < array.length; j++) {
//         if (array[i]>array[j]) {
//             x = array[i]
//             array[i] = array[j]
//             array[j] = x
//         }
//     }   
//     console.log(array);
// }
// console.log(array);

var ar = [2,5,2,9,1,887,0.88,896,76.99]
var q = 0;
while (q<ar.length) {
    for (let i = 0; i < (ar.length-q-1); i++) {
        if (ar[i] > ar[i+1]) {
             x = ar[i]
             ar[i] = ar[i+1]
             ar[i+1] = x
        }
     }
     q++
}
console.log(ar);