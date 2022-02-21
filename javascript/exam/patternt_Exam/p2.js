c='';
n=7;
for (let i = -(n+1); i <=n+1 ; i++) {
   for (let j = -(n+1); j <= n+1; j++) {
       if (j==-(n+1) || j==(n+1)) {
           c+='o'
       }
       else if (i==-(n+1) || i == (n+1)) {
           c+='0'
       }
       else if (i<0 && j <0 || i>0 && j>0) {
          if (Math.abs(i)*2 >= (Math.abs(i)+Math.abs(j))) {
              c+=Math.abs(j) +''
          }
          else{
              c+=' '
          }
       }
        else if (i>0 && j<0 || i<0 && j>0) {
           if (Math.abs(j)-Math.abs(i) >= 0) {
            q = (n-Math.abs(j))+1;
            c+=q+''
           }
           else{
               c+=' '
           }
        }
        else if (j== 0 && i== 0) {
            c+='o'
        }
       else
       {
           c+=' '
       }
   }
   console.log(c);
   c=''
}