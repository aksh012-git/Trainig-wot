
function finalEquation(a, b, c) {
    D = Math.pow(b, 2) - (4 * a * c);
    //If D<0 then print output as a imaginary number (i)
    if (D < 0) {
        q = (((-b) / (2 * a))).toFixed(3) + " + " + (Math.sqrt(-D) / (2 * a)).toFixed(3) + "i";
        q1 = (((-b) / (2 * a))).toFixed(3) + " - " + (Math.sqrt(-D) / (2 * a)).toFixed(3) + "i";
        return q + " and " + q1;
    }
    //If D>0 and D==0 then output as a Quadratic formula
    // D==0 then x and y is same otherwish x and y is diffrent
    else {
        var x = ((-b) + (Math.sqrt(Math.pow(b, 2) - (4 * a * c)))) / (2 * a);
        var y = ((-b) - (Math.sqrt(Math.pow(b, 2) - (4 * a * c)))) / (2 * a);
        return x + " and " + y;
    }
}

//check D, D>0,D<0,D==0
function checkD(a, b, c) {
    D = Math.pow(b, 2) - (4 * a * c);
    if (D > 0) {
        console.log(finalEquation(a, b, c));
    }
    else if (D == 0) {
        console.log(finalEquation(a, b, c));
    }
    else {
        console.log(finalEquation(a, b, c));
    }
}

//[a,b,c] in array
var array = [[1, 1, 1], [1, 3, -4], [1, 6, 9]];

var D;

//add array value in function
for (let i = 0; i < array.length; i++) {
    checkD(array[i][0], array[i][1], array[i][2]);
}


