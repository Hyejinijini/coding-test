// 24-06-04 (화)
/*
  1. 짝수는 싫어요
*/
function solution(n) {
  let answer = [];
  
  for (let i = 1; i <= n; i+=2) {
    answer.push(i);
  }
  
  return answer;
}