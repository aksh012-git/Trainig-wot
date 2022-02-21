c= '';
n  = 4;
for (let i = -4; i < 4+1; i++) {
   for (let j = -4; j < 4+1; j++) {
    if (j == 0) {
        continue;
    }
    else if((Math.abs(i)+Math.abs(j))<=5){
        c+='@';
    }
    else{
        c+='-';
    }
   }
   console.log(c);
   c='';
}