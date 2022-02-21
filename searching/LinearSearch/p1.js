numberArray = [1,4,3,2,9,7,6,1,3,4,5,8]
findElement = 3

for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] == findElement) {
        console.log("The index of given element",i);
        break;
    }
}