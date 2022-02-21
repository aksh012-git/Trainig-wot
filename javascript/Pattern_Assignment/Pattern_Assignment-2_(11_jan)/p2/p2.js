c= '';
n = 5;
for (let i = 0; i < 2*n; i++) {
   for (let j = -(n-1); j < n+1; j++) {
        if (j<=0 && i < n && (i-Math.abs(j)>=0) || j>0 && i>(n-1) && (i+j)<=2*n) {
            c+='@';
        }
        else{
            c+=' ';
        }
   }
   console.log(c);
   c='';
}


c= '';
n  = 4;
for (let i = -4; i < 4+1; i++) {
    if (i==0) {
        continue;
    }
   for (let j = -4; j < 4+1; j++) {
    if (j == 0) {
        continue;
    }
    else if((Math.abs(i)+Math.abs(j))<=5 && Math.sign(i)==Math.sign(j)){
        c+='@';
    }
    else{
        c+=' ';
    }
   }
   console.log(c);
   c='';
}