var category = [
    'movie',
    'news',
    'education',
    'sports',
    'politics',
]
var age = [
    'teenager',
    'adult'
]
_100LineOfArray = []
for(let i = 0;i<100;i++){
    _100LineOfArray.push({age:age[Math.floor(Math.random()*2)],type:category[Math.floor(Math.random()*5)],visitors:Math.floor(Math.random()*101)})
}

console.log(_100LineOfArray)

total_visitors = 0;
tempVisitor = 0;
tempArray = [];
lastArray = [];
for(let i = 0;i<category.length;i++){
   for(let j = 0;j<age.length;j++){
       for(let k = 0;k<_100LineOfArray.length;k++){
           if(_100LineOfArray[k].age == age[j] && _100LineOfArray[k].type == category[i]){
               tempVisitor += _100LineOfArray[k].visitors
           }
       }
       tempArray.push(tempVisitor)
       total_visitors += tempVisitor
       tempVisitor = 0;
   }
   lastArray.push(tempArray)
   tempArray = []
}
final_obj = {}
for(let i=0;i<lastArray.length;i++){
     final_obj[category[i]] = [""+Math.round(((lastArray[i][0] * 100)/total_visitors))+"%",""+Math.round(((lastArray[i][1] * 100)/total_visitors))+"%"]
}
console.log(final_obj);