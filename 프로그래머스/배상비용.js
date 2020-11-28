function solution(no, works) {
	var result = 0;
	works = works.sort();

	while(no > 0){
		let maxNum = Math.max.apply(null, works);
		let idx = works.indexOf(maxNum);
		works[idx] = maxNum - 1;
		no -= 1;
	}
	console.log(works);
	works.forEach(element => {
		element *= element;
		result = result + element;
	});
	console.log(result);
	return result;
}

solution(4, [4,3,4]);