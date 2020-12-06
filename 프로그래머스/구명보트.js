function solution(people, limit) {
	let arr = people.filter(value => value < limit);
	let answer = people.length - arr.length;
	let arrLength = arr.length;
	
	arr.sort((a,b) => b-a);
	while (arrLength > 0){
			const number = arr.pop();
			const idx = arr.findIndex(value => value + number <= limit);
			
			if (idx !== -1) {
					arr.splice(0, idx + 1);
					answer += idx + 1;
			} else {
					answer += len + 1;
					break;
			}
	}
	return answer;
}

solution([70, 50, 80, 50], 100);