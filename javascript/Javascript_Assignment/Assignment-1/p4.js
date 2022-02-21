let a = 5;
let b = 10;
function name1(x) {
    switch (x) {
        case "+":
            console.log(a+b);
            break;
        case "-":
            console.log(a-b);
            break;
        case "*":
            console.log(a*b);
            break;
        case "/":
            console.log(a/b);
            break;
        default:
            break;
    }
}
let x = "+";
name1(x);
let y = "-";
name1(y);
let k = "*";
name1(k);
let m = "/";
name1(m);
let w = "*-";
name1(w);