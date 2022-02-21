sortedArray = [1,2,3,4,5,6,7,8,9]
findElement = 4

function findElementOfArray(array,findElement,starting_index,ending_index) {
   mid_Index = Math.floor((starting_index+ending_index)/2);
   if (array[starting_index]==findElement) {
       return starting_index
   }
   else if (array[ending_index]==findElement) {
       return ending_index
   }
   else if (array[mid_Index]==findElement) {
       return mid_Index
   }
   else if (array[mid_Index] > findElement && array[starting_index] < findElement) {
       return findElementOfArray(array,findElement,starting_index,mid_Index)
   }
   else if (array[mid_Index] < findElement && array[ending_index] > findElement) {
        return findElementOfArray(array,findElement,mid_Index,ending_index)
   }
   else{
       return -1
   }
}
console.log('Index of given sorted element',findElementOfArray(sortedArray,findElement,0,sortedArray.length-1))