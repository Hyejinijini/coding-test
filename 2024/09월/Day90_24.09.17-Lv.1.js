// 24-09-17 (화)
/*
  1. 수박수박수박수박수박수?
*/
function solution(n) {
  let answer = "";

  for (let i = 1; i <= n; i++) {
    answer += i % 2 ? "수" : "박";
  }

  return answer;
}
