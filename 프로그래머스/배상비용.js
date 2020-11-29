function solution(no, works) {
	var result = 0;
	works = works.sort();

	while(no > 0){
		let maxNum = Math.max.apply(null, works);
		if(maxNum > 0){
			let idx = works.indexOf(maxNum);
			works[idx] = maxNum - 1;
			no -= 1;
		}
	}
	works.forEach(element => {
		element *= element;
		result = result + element;
	});
	return result;
}

solution(4, [4,3,4]);