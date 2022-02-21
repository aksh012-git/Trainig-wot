var string=""
let n=5
count = 3
for(i=1 ; i<=n ; i++)
{
    for(j=1 ; j<=n ; j++)
    {
        if(i==1)
        {
            string+=j + "  "
        }
        else if(j==5)
        {
            string+=i+(n-1) + "  "
        }
        else if(i==5) 
        {
            string+=(i*2) + count + " "
            count--
        }
        else if(j==1)
        {
            string+="|  "
        }
        else if(i==2)
        {
            string+="^  "
        }
        else if(j==4)
        {
            string+="*  "
        }
        else if(i==4)
        {
            string+="o  "
        }
        else if(j==2)
        {
            string+="$  "
        }
        else if(i==3)
        {
            string+="@  "
        }
        else
        {
            string+="   "
        }
    }
    string+="\n";
}
console.log(string)

console.log(parseInt(Math.sqrt(1)));
console.log(parseInt(Math.sqrt(2)));
console.log(parseInt(Math.sqrt(3)));
console.log(parseInt(Math.sqrt(4)));
console.log(parseInt(Math.sqrt(5)));
console.log(parseInt(Math.sqrt(6)));
console.log(parseInt(Math.sqrt(7)));
console.log(parseInt(Math.sqrt(8)));
console.log(parseInt(Math.sqrt(9)));
console.log(parseInt(Math.sqrt(10)));
console.log(parseInt(Math.sqrt(11)));
console.log(parseInt(Math.sqrt(12)));
console.log(parseInt(Math.sqrt(13)));
console.log(parseInt(Math.sqrt(14)));
console.log(parseInt(Math.sqrt(15)));
console.log(parseInt(Math.sqrt(16)));
console.log(parseInt(Math.sqrt(17)));
console.log(parseInt(Math.sqrt(18)));
console.log(parseInt(Math.sqrt(19)));
console.log(parseInt(Math.sqrt(20)));
console.log(parseInt(Math.sqrt(21)));
console.log(parseInt(Math.sqrt(22)));
