n = 5;
c = '';
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
       if ((i == j) || (i+j == n-1)) {
           c+='#';
       }
       else{
           c+="*";
       }
    }
    console.log(c);
    c = '';
}