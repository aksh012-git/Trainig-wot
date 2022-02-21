numberArray = [1,2,3,4,5,9,8,7,6]

function printIndex(startingIndex,endingIndex) {
    if (startingIndex == endingIndex) {
        return
    }
    else{
        console.log(startingIndex)
        return printIndex(startingIndex+1,endingIndex)
    }
}
printIndex(0,numberArray.length)