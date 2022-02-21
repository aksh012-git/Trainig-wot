x = '*';
c = '';
q = '';

n = 3;
for (let i = 0; i < n * n + 2; i++) {
    for (let j = -n; j < n +1; j++) {
            if (i==0 && j ==0) {
                c+='o'
            }
            else if (i == (n*n + 1)) {
                c+='='
            }
            else if (i>0 && i<n+1) {
                if (j-i==0) {
                    c+='\\'
                    q+='\\'
                }
                else if (Math.abs(j)-i == 0) {
                    c+='/'
                    q+='/'
                }
                else if (Math.abs(i)-Math.abs(j)<=n && Math.abs(i)-Math.abs(j)>=1) {
                    c+='-'
                    q+='-'
                }
                else{
                    c+=' '
                    q+=' '
                }  
            }
            else if (i>((n-1)*n) && j>=(-1) && j<=1) {
                if (j==-1 || j==1) {
                    c+='|'
                }
                else{
                    c+='='
                }
            }
            else if (i==4) {
                i+=3
                c+=q
            }
            else{
             c+=' '
            }
            
    }
    if (i<n*n+1) {
    c+='\n';
    q+='\n'
    }
}
console.log(c)
