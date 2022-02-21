function partition(arr, low, high) {
    let pivot = arr[high];
    let i = (low - 1);

    for (let j = low; j <= high - 1; j++) {

        if (arr[j] < pivot) {
            i++;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;
    return (i + 1);
}
function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);
        console.log(arr, pi)
        quickSort(arr, low, pi - 1);
        console.log('----',arr,pi)
        quickSort(arr, pi + 1, high);
    }
}
let arr = [3, 1, 7, 5, 2];
quickSort(arr, 0, arr.length - 1);
console.log(arr)

