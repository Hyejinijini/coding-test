// 24-08-22 (목)
/*
  1. 약수의 합
*/
function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    n % i ? null : (answer += i);
  }

  return answer;
}
