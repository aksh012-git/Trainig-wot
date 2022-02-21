c='';
n=6;
for (let i = -(n+1); i <=n+1 ; i++) {
   for (let j = -(n+1); j <= n+1; j++) {
    if (j==-(n+1) || j==(n+1)) {
        c+='|'
    }
    else if (i==-(n+1) || i == (n+1)) {
        c+='='
    }
    else if(i==0 && j==0) {
        c+='x'
    }
    else if (i==0 || j==0) {
        c+='0'
    }
    else if (Math.abs(i)-Math.abs(j)==0) {
        if (Math.sign(i)==Math.sign(j)) {
            c+='\\'
        }
        else{
            c+='/'
        }
    }
    else if (i<0&& j<0 || i>0 && j>0) {
        if ((Math.abs(i) - Math.abs(j))-1 >= 0) {
            c+=Math.abs(j)+''
        }
        else{
            c+=String.fromCharCode(98+(n-Math.abs(j)))
        }
    }
    else if (i>0 && j<0 || i<0 && j>0) {
        if ((Math.abs(j)-Math.abs(i))-1 >= 0) {
            q = (n-Math.abs(j))+1;
            c+=q+''
        }
        else{
            c+=String.fromCharCode(97+Math.abs(j))
        }
    }
   }
   console.log(c);
   c=''
}