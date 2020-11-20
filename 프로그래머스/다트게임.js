function solution(dartResult) {
    var answer = 0;
    const reducer = (accumulator, currentVal) => accumulator + currentVal;
    let dartArr = dartResult.split('');
    for(let i = 0; i < dartArr.length; i++){
       if(dartArr[i] === '1' && dartArr[i+1] ==='0'){
            dartArr.splice(i, 2, dartArr[i] + dartArr[i+1]);
            i -= 1;
       }
    }
    
    let copyArr = Array.from(dartArr);
    dartResult.split('').forEach(function (arg){
        let index = copyArr.indexOf(arg);
        // console.log(dartResult[index - 1]);
        switch (arg){
            case 'S':
                copyArr.splice((index - 1),2,(parseInt(copyArr[index - 1]) * 1)) ;
                break;
            case 'D':
                copyArr.splice((index - 1),2,(parseInt(copyArr[index - 1]) * parseInt(copyArr[index - 1]))) ;
                break;
            case 'T':
                copyArr.splice((index - 1),2,(parseInt(copyArr[index - 1]) * parseInt(copyArr[index - 1]) * parseInt(copyArr[index - 1]))) ;
                break;
            case '#':
                copyArr.splice((index - 1),2,(parseInt(copyArr[index - 1]) * (-1)));
                break;
            case '*':
                if(index >= 2){
                    copyArr.splice((index - 2),1,(parseInt(copyArr[index - 2]) * 2));
                    copyArr.splice((index - 1),2,(parseInt(copyArr[index - 1]) * 2));
                }else{
                    copyArr.splice((index - 1),2,(parseInt(copyArr[index - 1]) * 2));
                }
                
            
                break;
        }

    })
    console.log(copyArr);
    answer = copyArr.reduce(reducer,0);
    return answer;
}