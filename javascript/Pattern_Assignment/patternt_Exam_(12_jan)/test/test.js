c=''
n = 10
for (let i = -n; i <n+(n-3) ; i++) {
    for (let j = -n; j < n+1; j++) {
      if (Math.abs((n-Math.abs(i))) >= Math.abs(j)) {
          c+='*'
      }
      else{
          c+=' '
      }
    }
        if (i<n+(n-4)) {
            c+='\n'
        }
}
console.log(c);