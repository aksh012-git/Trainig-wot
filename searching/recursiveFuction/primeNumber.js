function checkPrimeOrNot(value,start) {
    if (value % start == 0 && value != 2) {
        return "Not Prime"
    }
    else{
        if (start > Math.sqrt(value)) {
            return "Prime"
        }
        return checkPrimeOrNot(value,start+1)
    }
}
console.log(checkPrimeOrNot(9,2));