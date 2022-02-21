function findFour(number) {
    var count = 0;
    var Nstr = number.toString;
    for (let i = 0; i < Nstr; i++) {
        if (number%10==4) {
            count++;
            
        }
    }
}
