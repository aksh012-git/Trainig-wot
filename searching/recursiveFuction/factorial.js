function factorial(value) {
    if (value==1 || value == 0) {
        return 1
    }
    else if (value<0) {
        return -1
    }
    else{
        return factorial(value-1) * value
    }
}
console.log(factorial(6))