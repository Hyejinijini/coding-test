// 24-09-10 (화)
/*
  1. 정수 제곱근 판별
*/
function solution(n) {
  let sqrt = Math.sqrt(n);

  return n % sqrt ? -1 : (sqrt + 1) ** 2;
}
