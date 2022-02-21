var w = 0;
function name1(a) {
    while (a>0) {
        w += a % 10;
        a = parseInt(a/10);
    }
    console.log(w);
    w = 0;
}
var array = [12345,51,96,7,9,96,11];
for (let index = 0; index < array.length; index++) {
    name1(array[index])
}
