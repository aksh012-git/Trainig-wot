array = ['E',1,'a',0,'a','A','b','c','B','d',4,5,6,'e']

function norm(first_val,second_val){
    first_input = first_val
    second_input = second_val
    if(typeof first_input == 'string'){
        first_input = first_input.charCodeAt();
        if(first_input>91){
            first_norm = first_input - 97
        }
        else{
            first_norm = first_input - 65
        }
    }
    else{
        first_norm = first_input
    }
    if(typeof second_input == 'string'){
        second_input = second_input.charCodeAt();
        if(second_input>91){
            second_norm = second_input - 97
        }
        else{
            second_norm = second_input - 65
        }
    }
    else{
        second_norm = second_input
    }
    if(first_norm == second_norm && typeof second_val != 'string'){
        return true
    }
    else if(first_norm == second_norm && first_input < second_input && typeof first_val != 'string'){
        return false
    }
    else if(first_norm == second_norm && first_input < second_input){
        return true
    }
    else if(first_norm > second_norm){
        return true
    }
    return false
}

function part(array,min,max){
    var pivot = array[min]
    i = max+1
    for(let j = max;j>=min+1;j--){
        if(norm(array[j],pivot)){
            i--;
            temp = array[j]
            array[j] = array[i]
            array[i] = temp
        }
    }
    temp = array[i-1]
    array[i-1] = array[min]
    array[min] = temp
    return (i-1)
}

function quickSort(array,min,max){
    if(min<max){
        var indexOfPivot = part(array,min,max);
        quickSort(array,min,indexOfPivot-1)
        quickSort(array,indexOfPivot+1,max)
    }
}

quickSort(array,0,array.length-1);
console.log(array);