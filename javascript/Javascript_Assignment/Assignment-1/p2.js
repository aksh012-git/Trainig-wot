function myvel(x) {
   if(typeof x == "string"){
        return true;
   }
   else{
        return false;
   }
}
var name1 = true;
console.log(myvel(name1));
var name1 = 3;
console.log(myvel(name1));
var name1 = "true";
console.log(myvel(name1));