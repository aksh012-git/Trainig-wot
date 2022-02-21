let i = 0;
function name1(a,q) {
    if (a % q == 0) {
        i++;
    }
    return i;
}
var array = [1,51,966369,7,9,999996,11];
var q = 3;
for (let index = 0; index < array.length; index++) {
    name1(array[index],q)
}
console.log(name1(array.length,q));