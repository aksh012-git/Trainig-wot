function myf(a,b) {
    console.log(a%b);
}
var array =[[1,2],[100,200],[40,15]];
for (let index = 0; index < array.length; index++) {
    myf(array[index][0],array[index][1]);
}