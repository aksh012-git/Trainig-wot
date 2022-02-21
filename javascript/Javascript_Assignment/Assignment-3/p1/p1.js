function findSubString(substring) {
    if (str.includes(substring)) {
        console.log("Yes,","\'"+substring+"\'","is included in string");
    }
    else{
        console.log("No,","\'"+substring+"\'","isn't included in string");
    }
}

var str = "Hey, My name is aksh maradiya";

var subStringsArray = ['hey','ey','akh','na','iya'];
subStringsArray.forEach(elementOfSubStringsArray => {
    findSubString(elementOfSubStringsArray);
});