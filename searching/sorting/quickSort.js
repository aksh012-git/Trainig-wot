array = [5,2,4,0,7,1,3,10]

function part(array,min,max) {
    pivot = array[min]
    i = max + 1
    for (let j = max; j>=min+1; j--) {
        if (array[j]>pivot) {
            i--
            temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        }
    }
    temp = array[i-1];
    array[i-1] = array[min];
    array[min] = temp;
    return (i-1);
}
function quickSort(array,min,max) {
    if (min<max) {
        partIndex = part(array,min,max)
        quickSort(array,min,partIndex-1)
        quickSort(array,partIndex+1,max)
    }
}
// console.log(part(array,0,array.length-1),array)
quickSort(array,0,array.length-1)
console.log(array)