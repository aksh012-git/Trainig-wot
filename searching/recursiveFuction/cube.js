function findCube(start,end) {
    if (start==end) {
        console.log(Math.pow(start,3))
    }
    else{
        console.log(Math.pow(start,3))
        return findCube(start+1,end)
    }
}
findCube(1,4)