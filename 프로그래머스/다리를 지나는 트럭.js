function solution(bridge_length, weight, truck_weights) {
	var answer = 0;
	var tempArr = [];//다리를 지나는 트럭 배열
	let reducer = (curr, next) => curr + next;
	
	for(let i = 0; i < truck_weights.length; i++){
			if (tempArr.length === 0) { //다리를 지나는 트럭이 하나도 없을 때 
					tempArr.push(truck_weights[i])
					answer++;
			} else {
				if (tempArr.recuse((reducer, 0)) + truck_weights[i] < weight) {
					tempArr.push(truck_weights[i])
					answer++;
				}
			}

	}
	return answer;
}
/**
 *  - 다리를 지나고 있는 트럭의 무게 + 다리에 올라가는 트럭의 무게 > 다리가 견딜 수 있는 무게   일떼, 시간경과를 어떻게 처리할지?
 *  - 다리를 지나고 있는 트럭의 도착을 어떻게 처리할 지 ? 
 * 		=> tempArr 에서 제거하면서 answer + 1 ?
 */