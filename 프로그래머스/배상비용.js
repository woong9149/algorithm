function solution(no, works) {
	var result = 0;

	let workSum = works.reduce((accu, curr) => accu + curr);
  if (workSum > no) {
		while(no > 0){
			let maxNum = Math.max.apply(null, works);
			if(maxNum > 0){
				let idx = works.indexOf(maxNum);
				works[idx] = maxNum - 1;
				// works.splice(idx,1,maxNum - 1);
				no -= 1;
			} else {
							return 0;
					}
		}
		works.forEach(element => {
			element *= element;
			result = result + element;
		});
		return result;
	} else {
		return 0;
	}
}

solution(4, [4,3,4]);