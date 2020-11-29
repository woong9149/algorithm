function solution(numbers, target) {
	var answer = 0;

	dfs(0, 0);

	function dfs(idx, sum){
		if(idx === numbers.length) {
			if(sum === target) {
				answer++;
			}
			return;
		}
		dfs(idx + 1, sum + numbers[idx]);// dfs(1,1) -> dfs(2,2)->dfs(3,3)...dfs(5,5)에서 return을 만나 해당함수를 stack에서 제거하고
		dfs(idx + 1, sum - numbers[idx]);// dfs(4,4)에서 dfs(4,3) 실행
	}
	return answer;
}

solution([1,1,1,1,1],3);