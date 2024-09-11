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
