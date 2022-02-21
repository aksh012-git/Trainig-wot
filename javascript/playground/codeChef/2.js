function name1(a,b) {
    console.log(a+b);
}
var array = [[1,2],[100,200],[10,40]]
for (let index = 0; index < array.length; index++) {
    name1(array[index][0],array[index][1]);
}