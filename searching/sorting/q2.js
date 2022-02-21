arr = [4, 3, 1, 2, 2, 1,1];
// arr = [3, 1, 3];

minVal = Math.min(...arr);
var repeatingArray = [],missingArray = []
for (let i = 0; i < arr.length; i++) {
   if (!arr.includes(minVal)) {
    missingArray.push(minVal)
   }
   for (let j = i+1; j < arr.length; j++) {
       if (arr[i]==arr[j]) {
        if (!repeatingArray.includes(arr[i])) {
            repeatingArray.push(arr[i])
        }
       }
   }
   minVal++;
}
console.log('missingVal:',missingArray,'repeatedVal:',repeatingArray)

//---------------------------------------------------------------------------------------------

// for (i = 1; i < arr.length; i++) {
//     val = arr[i];
//     j = i - 1;
//     while (j >= 0 && arr[j]>val) {
//         arr[j + 1] = arr[j];
//         j--;
//     }
//     arr[j + 1] = val;
// }
// var repeatingArray = [],missingArray = []
// for (let i = 0; i < arr.length - 1; i++) {
//    if (arr[i]==arr[i+1]) {
//        if (!repeatingArray.includes(arr[i])) {
//         repeatingArray.push(arr[i])
//        }
//    }
//    else if((arr[i]+1) != arr[i+1] ) {
//        missingArray.push(arr[i]+1)
//    }
// }
// console.log('missingVal:',missingArray,'repeatedVal:',repeatingArray)







