function findNumber(start,end) {
    if (start == end) {
        if (start%7 == 0 && start%9 == 0) {
            console.log(start)
        }
    }
    else{
        if (start%7 == 0 && start%9 == 0) {
            console.log(start)
            return findNumber(start+1,end)
        }
        return findNumber(start+1,end)
    }
}
findNumber(1,500)