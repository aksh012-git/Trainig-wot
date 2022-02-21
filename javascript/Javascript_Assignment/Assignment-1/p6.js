function name1(v1,v2) {
    if (v1%v2 == 0 || v2%v1 == 0) {
        return true
    }else{
        return false
    }
}
var x = 5,y = 10;
console.log(name1(x,y));
var x = 15,y = 5;
console.log(name1(x,y));
var x = 15,y = 10;
console.log(name1(x,y));