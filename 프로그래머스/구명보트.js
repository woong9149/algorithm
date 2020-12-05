function solution(people, limit) {
	var answer = 0;
	
	const copyPeople = Array.from(people);
	const calc = (curr, next) => curr + next;
	for (let i = 0; i < copyPeople.length; i++) {
		let temp;
		for(let j = i + 1; j < copyPeople.length; j++) {
			 answer = copyPeople.slice(i + 1, j + 1).reduce(calc, copyPeople[i]) <= limit ? answer++ : answer;
		}
	}
	console.log(answer);
	return answer;
};

solution([70, 50, 80, 50], 100);
/**
 *  point. 반복문을 돌 때 마다, 모든 사람을 구출할 수 있는 경우의 수를 만들어야함.===>이게 관건이 아닌가
 * 					그 때 필요한 보트의 갯수를 비교해서 가장 작은 수를 반환해야함.
 */