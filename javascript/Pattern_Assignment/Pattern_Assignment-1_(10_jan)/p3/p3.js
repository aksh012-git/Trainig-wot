n = 5;
myVal = 1;
c = '';
for (let i = 1; i <n+1 ; i++) {
    for (let j = 1; j <n+1; j++) {
       c+=myVal;
    }
    console.log(c);
    myVal++;
    c ='';
}

// function myF(n) {
//     myVal = 1;
//     c = '';
//     for (let i = 1; i <n+1 ; i++) {
//         for (let j = 1; j <n+1; j++) {
//            c+=myVal;
//         }
//         console.log(c);
//         myVal++;
//         c ='';
//     }
// }
// var n = [1,2,3,4,5,6,7,8,9];
// n.forEach(element => {
//     myF(element);
//     console.log('-------------');
// });