function solution(n) {
	var answer = '';
	let a = n / 3 ;
	let b = n % 3 ;
	 switch (a) {
		 case 0:
			 answer = ''
			 break;
		 case 1:
			 answer = '1'
		 	 break; 
		 case 2:
			 answer = '2'
			 break;
		 case 3:
			 answer = '4'
			 break;
		 case 4:
			 answer = ''
			 break;
		 default:
			 break;
	 }
	return answer;
}