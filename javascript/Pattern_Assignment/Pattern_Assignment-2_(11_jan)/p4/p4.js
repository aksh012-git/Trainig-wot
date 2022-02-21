n = 9;
c='';
for (let i = -(n+1); i < n+2; i++) {
   for (let j = -(n+1); j < n+2; j++) {
      if (Math.abs(i)==n+1 || Math.abs(j)==n+1) {
          c+='o';
      }
      else if (Math.abs(i)*2>= Math.abs(i)+Math.abs(j)) {
          if ((j>0 && i<0) || (j<0 && i>0)) {
              c+=  ((Math.abs(i) - Math.abs(j)) + 1) + '';
          }
          else if (i<=0 && j<=0 || i>0 && j>=0) {
              var q = 97;
              c+= String.fromCharCode(q+(Math.abs(i)-Math.abs(j)));
          }
      }
      else{
          c+=' ';
      }
   }
   console.log(c);
   c='';
}