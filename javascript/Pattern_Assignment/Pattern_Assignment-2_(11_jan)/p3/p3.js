c= "";
n = 10;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
            if (i==j && i!=(n-1)/2) {
                if (n%2==0 && (n/2)-1 == i || n/2 == i) {
                    c+='o';
                }
                else{
                    c+='\\'
                }
            }
            else if (i+j == n-1 && i!=(n-1)/2) {
                if (n%2==0 && (n/2)-1 == i || n/2 == i) {
                    c+='o'
                }
                else{
                    c+='/'
                }
            }
            else if(i==(n-1)/2 && j==(n-1)/2){
                c+='o'
            }
            else if (i==0 || i==n-1 && j!=0) {
                c+='-'
            }
            else if (j==0 || j==n-1 && i!=0) {
                c+='|'
            }else{
                c+=" "
            }       
    }
    console.log(c);
    c=""
}