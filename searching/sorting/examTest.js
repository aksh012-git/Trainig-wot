item = ['gym','school','store']
buildings = ['b1','b2','b3','b4','b5']
totalBuldings = {
    b1 : {
        gym:0,
        school:1,
        store:0
    },
    b2 : {
        gym:1,
        school:0,
        store:0
    },
    b3 : {
        gym:1,
        school:1,
        store:0
    },
    b4 : {
        gym:0,
        school:1,
        store:0
    },
    b5 : {
        gym:0,
        school:1,
        store:1
    }
}
countArray = []
for (let i = 0; i < item.length; i++) {
    tempArray = []
    for (let j = 0; j < buildings.length; j++) {
        if (totalBuldings[buildings[j]][item[i]] == 1) {
            tempArray.push(parseInt(buildings[j][1]))
        }
    }
    countArray.push(tempArray)
}
console.log(countArray);

gymToSchool = []
gymToStore = []
schoolToStore = []

for (let i = 0; i < countArray[0].length; i++) {
   for (let j = 0; j < countArray[1].length; j++) {
            if (Math.abs(countArray[0][i] - countArray[1][j]) ) {
                
            }
   }
}
console.log(gymToSchool);