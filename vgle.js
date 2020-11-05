function solution(n, ladder) {
    var answer = [];
    var now ;
    var arrInNow;
    console.log(ladder.length);
    for(let i = 0; i < n; i++){
        now = i;
        arrInNow = 0;
        for(let j = 0; j<ladder.length;j++){
            
            if(now === 0){
                if (ladder[now][arrInNow] === 1){
                    now = now+1;
                    arrInNow = arrInNow+1;
                    console.log('now: ',now);
                    console.log('ladder: ', ladder[now][arrInNow]);
                }
            }else{
                if(ladder[now-1][arrInNow-1] === 1 ){
                    now = now-1;
                    arrInNow = arrInNow === 0 ? 0 : arrInNow - 1 ;
                    console.log('now1: ',now);
                    console.log('ladder1: ',ladder[now][arrInNow])
                }else if (ladder[now][arrInNow] === 1){
                    now = now+1;
                    arrInNow = arrInNow+1;
                    console.log('now2: ',now);
                    console.log('ladder2: ', ladder[now][arrInNow]);
                }else{
                    now = now + 1
                    console.log('now3: ',now);
                }
            }
           
        }
        answer.push(now+1);
      
    }
    console.log(answer);
    return answer;
}

solution(4,[[1,0,1],[0,1,0],[0,0,1],[0,0,0],[1,0,0]]); //출력 4231




