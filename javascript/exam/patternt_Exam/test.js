c=''
n=3
for (let i = 0; i < n*n+2; i++) {
    for (let j = -n; j <=n ; j++) {
        if (i==0) {
            if (i==0 && j== 0) {
                c+='o'
            }
            else{
                c+='*'
            }
        }
        if (i>0 && i<=n) {
        //    if (Math.abs(i)-Math.abs(j)==0 && Math.sign(i) != Math.sign(j)) {
        //        c+='/'
        //    }
        //    else if (Math.abs(i)-Math.abs(j)==0 && Math.sign(i) == Math.sign(j)) {
        //        c+='\\'
        //    }
        //    else{
        //        c+='@'
        //    }
        
        }
    }
    c+='\n'
}
console.log(c)