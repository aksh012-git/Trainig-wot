function odd(start,end) {
    if (end==start) {
        console.log((2*start)-1)
    }
    else{
        console.log((2*start)-1)
        return odd(start+1,end)
    }
}
odd(1,10)
console.log('----------------')

function even(start,end) {
    if (end==start) {
        console.log((2*start))
    }
    else{
        console.log((2*start))
        return even(start+1,end)
    }
}
even(1,10)