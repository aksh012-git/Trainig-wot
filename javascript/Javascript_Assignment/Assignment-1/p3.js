function myvel(x) {
    if(x % 1 != 0 && typeof x != "string"){
         return true;
    }
    else{
         return false;
    }
 }
 var name1 = false;
 console.log(myvel(name1));
 var name1 = 3;
 console.log(myvel(name1));
 var name1 = "truefalse";
 console.log(myvel(name1));
 var name1 = 43.34;
 console.log(myvel(name1));