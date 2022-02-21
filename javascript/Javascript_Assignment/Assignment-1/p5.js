function name1(v1,v2) {
    if (v1>v2) {
        console.log(v2);
    }
    else if (v2>v1) {
        console.log(v1);
    }
    else{
      console.log("both are same");
    }
}
var x = 15, y=20;
name1(x,y);
var x = 2323299, y=232312;
name1(x,y);
var x = 12, y=12;
name1(x,y);