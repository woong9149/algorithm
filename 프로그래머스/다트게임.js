function solution(dartResult) {
    var answer = 0;
    let copyArr = Array.from(dartResult);
    dartResult.forEach(function (arg){
        switch (arg){
            case 'S':
                copyArr.splice(dartResult[dartResult.indexOf(arg) - 1],dartResult[dartResult.indexOf(arg) + 1],parseInt(dartResult[dartResult.indexOf(arg) - 1]) * 1) ;
            case 'D':
                return dartResult[dartResult.indexOf(arg) - 1] * dartResult[dartResult.indexOf(arg) - 1] ;
            case 'T':
                return dartResult[dartResult.indexOf(arg) - 1] * dartResult[dartResult.indexOf(arg) - 1] * dartResult[dartResult.indexOf(arg) - 1];
        }
    })
    return answer;
}




