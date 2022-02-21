number_Array = [1,2,1,2,1,2,1,2]
sumOfElement = 0
function sumOfArrayElement(array,starting_index,ending_index) {
    if (starting_index == ending_index) {
        return
    }
    else{
        sumOfElement += array[starting_index]
        return sumOfArrayElement(array,starting_index+1,ending_index)
    }
}

sumOfArrayElement(number_Array,0,number_Array.length);
console.log(sumOfElement)