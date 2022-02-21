//P3
var category = [
    "movie",
    "news",
    "education",
    "sports ",
    "politics"
]

var age = [
    "teenager",
    "adult"
]


var _100LinesObj = [];
for (let i = 0; i < 100; i++) {
    _100LinesObj.push({agE:age[(parseInt(Math.random() * 2))],
        categorY:category[((parseInt(Math.random() * 5)))],
        visitorS:(parseInt(Math.random() * 100 + 1))});
}
console.log(_100LinesObj);



//p4

// add P3 data into p4
var data = _100LinesObj;

//define var
var movieOfteen = 0, sportsOfteen = 0, neawsOfteen = 0, educationOfteen = 0, politicsOfteen = 0;
var movieOfadu = 0, sportsOfadu = 0, neawsOfadu = 0, educationOfadu = 0, politicsOfadu = 0;

//sum of adults and teenagers work
for (let i = 0; i < data.length; i++) {
    if (data[i].agE == 'teenager') {
        if (data[i].categorY == 'movie') {
            movieOfteen += data[i].visitorS;
        }
        else if (data[i].categorY == 'sports ') {
            sportsOfteen += data[i].visitorS;
        }
        else if (data[i].categorY == 'news') {
            neawsOfteen += data[i].visitorS;
        }
        else if (data[i].categorY == 'education') {
            educationOfteen += data[i].visitorS;
        }
        else if (data[i].categorY == 'politics') {
            politicsOfteen += data[i].visitorS;
        }

    }
    else {
        if (data[i].categorY == 'movie') {
            movieOfadu += data[i].visitorS;
        }
        else if (data[i].categorY == 'sports ') {
            sportsOfadu += data[i].visitorS;
        }
        else if (data[i].categorY == 'news') {
            neawsOfadu += data[i].visitorS;
        }
        else if (data[i].categorY == 'education') {
            educationOfadu += data[i].visitorS;
        }
        else if (data[i].categorY == 'politics') {
            politicsOfadu += data[i].visitorS;
        }
    }
}

//total of adults and teenagers
var aduAll = movieOfadu + sportsOfadu + politicsOfadu + educationOfadu + neawsOfadu;
var teenall = movieOfteen + sportsOfteen + politicsOfteen + educationOfteen + neawsOfteen;


var teenArray = [movieOfteen, sportsOfteen, neawsOfteen, educationOfteen, politicsOfteen];
var aduArray = [movieOfadu, sportsOfadu, neawsOfadu, educationOfadu, politicsOfadu];

var answer = []

//make obj for adding final %
var objFinal = { movie: [], sport: [], news: [], education: [], politics: [] };
var temp2 = ['movie', 'sport', 'news', 'education', 'politics'];

//adding % in final obj
for (let i = 0; i < teenArray.length; i++) {
    var temp = [];
    temp.push(parseFloat(((teenArray[i] * (teenall * 100 / (aduAll + teenall))) / teenall).toFixed(2)));
    temp.push(parseFloat(((aduArray[i] * (aduAll * 100 / (aduAll + teenall))) / aduAll).toFixed(2)));
    answer.push(temp);
    objFinal[temp2[i]] = temp;
}

//final out put
console.log(objFinal);


// console.log(answer);


// For testing purpose
var total = 0;
for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < answer[i].length; j++) {
        total += answer[i][j];
    }
}
console.log(Math.round(total));

