function solution(arr) {
    let len = arr.length ;
    for(var i = 0 ; i < len; i++){
        if(arr[i] !== answer[i+1]){
            answer.push(arr[i]);
        }
    }
    return answer ;
}

solution([4, 4, 4, 3, 3]);