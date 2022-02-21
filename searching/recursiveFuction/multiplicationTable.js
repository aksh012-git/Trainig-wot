//Write a program in C to display the multiplication table of a given integer.

function table(element,start,end) {
    if (start==end) { 
        return console.log(element + 'x'+ start +'='+element*start)
    }
    else{
        console.log(element + 'x'+ start +'='+element*start) 
        return table(element,start+1,end)
    }
}
table(7,1,15)