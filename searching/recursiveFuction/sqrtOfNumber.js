function sqrtOfNum(start,end) {
    if (start==end) {
        return console.log((Math.sqrt(start)).toFixed(3))
    }
    console.log((Math.sqrt(start)).toFixed(3))
    return sqrtOfNum(start+1,end)
}
sqrtOfNum(1,15)