//Method -1
var n = 5;
var x = "*"
var c = '';
for (let i = 0; i < n; i++) {
   for (let j = 0; j < n; j++) {
       if ((i+j)>= (n-1)) {
           c+=x;
       }
       else{
           c+=" ";
       }
   }
   console.log(c);
   c="";
}
//Method -2
console.log("-----------------");
var n = 5;
var x = "*"
var c = '';
for (let i = n; i>0; i--) {
    for (let j = n; j >0; j--) {
       if (n+1>=(i+j)) {
        c+=x;
       }
       else{
        c+=" ";
       }
    }
    console.log(c);
    c="";
}