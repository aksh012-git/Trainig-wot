var array = [12,'aksh','maradiya',88,'no',true,23.32];

//Method - 1
array.forEach(elementOfArray => {
    console.log(elementOfArray);
});

//Method - 2
console.log('-----------------------------');
array.forEach(printArrayElemenet);
function printArrayElemenet(value,index,fullArray) {
    console.log(value);
}

//Method - 3
console.log('-----------------------------');
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);    
}