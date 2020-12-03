function solution(s)
{
    var answer = 0;
    var sArr = [];
    
    for (let i = 0; i < s.length; i++) {
      if( (sArr.length === 0 ) || (sArr[sArr.length-1] !== s[i])) {
        sArr.push(s[i]);
      } else {
        sArr.pop();
      }
    }
  
    return answer = (sArr.length === 0) ? 1 : 0;
}