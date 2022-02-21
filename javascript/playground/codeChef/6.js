var w = 0;
function name1(a) {
    w += a % 10;
    if(a>10){
    while (a>0) {
        if (a>0 && a<=9) {
            w += a % 10;
        }
        a = parseInt(a/10);
    }
}
    console.log(w);
    w =0;
}
var array = [12345,51,96,7,9,96,11];
for (let index = 0; index < array.length; index++) {
    name1(array[index])
}