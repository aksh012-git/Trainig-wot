array = ['E','z','b','e','Z']

function check_values_small(first_val,second_val)
{
    first_val=first_val.charCodeAt()
    second_val=second_val.charCodeAt()
    if (first_val>91)
    {
        first_norm=first_val-97
    } 
    else{
        first_norm=first_val-65
    }
    if (second_val>91)
    {
    second_norm=second_val-97
    } 
    else{
        second_norm=second_val-65
    }
    if (first_norm == second_norm && second_val<first_val)
    {
        return true
    }
    else if(first_norm < second_norm)
    {
        return true
    }
    return false
}

for (let i = 0; i < array.length; i++) {
    min = i;
    for (let j = i + 1; j < array.length; j++) {
        if(check_values_small(array[j], array[min])){
            min = j
        }
    }
    x = array[min]
    array[min] = array[i]
    array[i] = x
}
console.log(array)