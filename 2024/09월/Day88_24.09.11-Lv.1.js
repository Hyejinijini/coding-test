// 24-09-11 (수)
/*
  1. x만큼 간격이 있는 n개의 숫자
*/
function solution(x, n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }

  return answer;
}

/*
  2. 없는 숫자 더하기
*/
function solution(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}
