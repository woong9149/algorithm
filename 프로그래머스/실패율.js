function solution(N,stages) {
	var answer = [];
	var	result = [];

	for(let i = 0; i < N; i++) {
			var a = stages.filter(arg => arg >= i+1).length;
			var b = stages.filter(arg => arg === i+1).length;
			if( b === 0){
					result.push(0);
			}else {
			result.push(b/a);
			}
	}

	for(var i =0; i < N; i++) {
			var index = result.indexOf(Math.max.apply(null, result));
			answer.push(index+1); //answer[i] = index+1;도 가능
			result[index] = -1;
	}
	return answer;
}
