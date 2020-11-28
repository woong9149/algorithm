function solution(n, m){
	var answer = 0
	for(let i = n; i <= m; i++){
		let numToString = i.toString().split('').reverse().join('');
		console.log(numToString);
		if(i == numToString){
			answer++
		}
	}
	console.log('amswer: ',answer);
	return answer
}

solution(1,100);