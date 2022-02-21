arr = [12, 34, 10, 6, 40, 40, 50];
var sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i] != arr[j]) {
            if(sum<(arr[i]+arr[j])){
                sum = arr[i]+arr[j]
            }
        }   
    }
}
console.log(sum)


// for (let i = 1; i < arr.length; i++) {
//         val = arr[i];
//         j = i - 1;
//         while (j >= 0 && arr[j] > val) {
//             arr[j + 1] = arr[j];
//             j--;
//         }
//         arr[j + 1] = val;
//     }
//     for (let i = arr.length - 2; i > 0; i--) {
//         if (arr[arr.length - 1] != arr[i]) {
//             console.log(arr[arr.length - 1] + arr[i]);
//             break;
//         }
//     }