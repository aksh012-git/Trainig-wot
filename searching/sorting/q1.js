// array = [-1, 0, 1, 5, 10, -8, 6];
array = [5,6,8,-7,5]
// array = [5, 6, 8, -7, 5, 7]
// array = [5, 6, 8, 7, 5]
arr = [], finalArray = [];
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        arr.push(Math.abs(array[i] + array[j]))
    }
}
min = Math.min(...arr)
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (min == Math.abs(array[i] + array[j])) {
            finalArray.push([array[j], array[i]])
        }
    }
}
console.log(finalArray);


