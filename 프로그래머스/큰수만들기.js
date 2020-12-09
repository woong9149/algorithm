function solution(number, k) {
	var answer = '';
	let numArr = number.split('');
											// .sort((a,b) => b-a);
	// let removedArr = numArr.splice(0, numArr.length - k)
	for(let i = 0; i < numArr.length; i++) {
		if(numArr[i] < numArr[i+1]){
			numArr[i] = '';
			k--;
		}else if(numArr[i] > numArr[i+1]){
			if(numArr[i+1] < numArr[i+2]){
				numArr[i+1] = numArr[i];
				numArr[i] = '';
				k--;
			}
		}

		if(k === 0) break;
	}
	answer = numArr.join('').replace(/ /g, '');
	return answer;
}

solution('4177252841', 4);