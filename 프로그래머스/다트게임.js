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
    let lastArr = [];
    // lastArr.forEach(function (param){
        copyArr.forEach(function(arg){
    // while(copyArr.includes(param)){
    //     let arg = copyArr.find( element => element === param)
        let index = copyArr.indexOf(arg);
        // console.log(dartResult[index - 1]);

        switch (arg){
            case 'S':
                // copyArr.splice((index - 1),2,(parseInt(copyArr[index - 1]) * 1)) ;
                lastArr.push(parseInt(copyArr[index - 1]));
                // if(copyArr[index + 1] === '*' || copyArr[index + 2] === '*' || copyArr[index + 3] === '*'){
                //     lastArr.push((parseInt(copyArr[index - 1]) * 2));
                // }else if(copyArr[index + 1] === '#'){
                //     lastArr.push((parseInt(copyArr[index - 1]) * (-1)));
                // }else{
                //     lastArr.push(parseInt(copyArr[index - 1]));
                // }
                break;
            case 'D':
                // copyArr.splice((index - 1),2,(parseInt(copyArr[index - 1]) * parseInt(copyArr[index - 1]))) ;
                lastArr.push((parseInt(copyArr[index - 1]) * parseInt(copyArr[index - 1])));
                // if(copyArr[index + 1] === '*' || copyArr[index + 2] === '*' || copyArr[index + 3] === '*'){
                //     lastArr.push(((parseInt(copyArr[index - 1])*parseInt(copyArr[index - 1])) * 2));
                // }else if(copyArr[index + 1] === '#'){
                //     lastArr.push((parseInt(copyArr[index - 1])*parseInt(copyArr[index - 1]) * (-1)));
                // }else{
                //     lastArr.push((parseInt(copyArr[index - 1]) * parseInt(copyArr[index - 1])));
                // }
                break;
            case 'T':
                // copyArr.splice((index - 1),2,(parseInt(copyArr[index - 1]) * parseInt(copyArr[index - 1]) * parseInt(copyArr[index - 1]))) ;
                lastArr.push((parseInt(copyArr[index - 1]) * parseInt(copyArr[index - 1]) * parseInt(copyArr[index - 1])));
                
                // if(copyArr[index + 1] === '*' || copyArr[index + 2] === '*' || copyArr[index + 3] === '*'){
                //     lastArr.push(((parseInt(copyArr[index - 1])*parseInt(copyArr[index - 1])*parseInt(copyArr[index - 1])) * 2));
                // }else if(copyArr[index + 1] === '#'){
                //     lastArr.push((parseInt(copyArr[index - 1])*parseInt(copyArr[index - 1])*parseInt(copyArr[index - 1]) * (-1)));
                // }else{
                //     lastArr.push((parseInt(copyArr[index - 1]) * parseInt(copyArr[index - 1])*parseInt(copyArr[index - 1])));
                // }
                break;
            case '#':
                // copyArr.splice((index - 1),2,(parseInt(copyArr[index - 1]) * (-1)));
                lastArr.push(copyArr[index]);
                break;
            case '*':
                // copyArr.splice((index - 2),1,(parseInt(copyArr[index - 2]) * 2));
                // copyArr.splice((index - 1),2,(parseInt(copyArr[index - 1]) * 2));
                lastArr.push(copyArr[index]);
                break;
        }
    // }
    })
    // console.log(copyArr);
    for(let i = 0; i < lastArr.length; i++){
        if(typeof(lastArr[i]) === 'int'){
            if(lastArr[i + 1] === '*' || lastArr[i + 2] === '*'){
                answer += (lastArr[i] * 2);
            }else if(lastArr[i + 1] === '#'){
                answer += (lastArr[i] * (-1));
            }else{
                answer += lastArr[i];
            }
            
        }
        // else if(lastArr[i] === '*'){
        //     // lastArr.splice((index - 2),1,(parseInt(copyArr[index - 2]) * 2));
        //     // copyArr.splice((index - 1),2,(parseInt(copyArr[index - 1]) * 2));
        //     if(i > 1 ){
        //         answer += (answer  + (parseInt(lastArr[i - 1]) * 2))
        //     }else{
        //         answer += (parseInt(lastArr[i - 1]) * 2)
        //     }
        // }else if(lastArr[i] === '#'){
        //     // copyArr.splice((index - 1),2,(parseInt(copyArr[index - 1]) * (-1)));
        //     answer += (parseInt(lastArr[i - 1]) * (-1))
        // }
    }
    // answer = lastArr.reduce(reducer,0);
    return answer;
}

solution("1S*2T*3S");



