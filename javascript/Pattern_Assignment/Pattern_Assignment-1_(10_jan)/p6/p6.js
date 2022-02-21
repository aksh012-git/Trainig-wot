//Method-1
var n = 5;
var c = '';
var count = 0;
var w = n - 1;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n + n; j++) {
        if ((j + i) >= w && (j - i) <= w) {
            if (j <= w) {
                count++;
                c += count;
            }
            else {
                count--;
                c += count;
            }
        }
        else {
            c += " ";
            count = 0;
        }
    }
    console.log(c);
    c = "";
}


//method-2
var n = 5;
var c = '';
var count = 0;
var w = n - 1;
for (let i = 0; i < n; i++) {
    for (let j = -(w); j < n; j++) {
        if (i-Math.abs(j)>=0) {
            c+=i-Math.abs(j)+1;
        }
        else {
            c += " ";
        }
    }
    console.log(c);
    c = "";
}