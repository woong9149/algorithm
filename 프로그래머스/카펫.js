function solution(brown, yellow) {
	var answer = [];
	// let horizontal = (brown / 2) - 2;
	// let vertical = brown - (horizontal * 2) +;
	
	return answer;
}
/*
*	- 카펫 조건 1.중앙은 노란색, 2.테두리 1줄은 갈색, 3. 가로 >= 세로
	- 노란색이 가운데 오려면, 갯수가 홀수 일 때는 가로길이가 홀 수, 짝수일 때는 가로길이가 짝수
	- 노란색이 8개부터 두 겹 가능 => 노란색이 4의 배수일 때 규칙 따름
	- 노란색이 4의 배수이면 층을 쌓다가, 가로길이가 세로길이보다 작으면 위의 한층을 가로로 붙여야함
	- 가로X2 + 2 = brown, 노란색 길이 + 2 = 가로길이
 */