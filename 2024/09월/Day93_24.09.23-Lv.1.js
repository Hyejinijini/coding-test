// 24-09-23 (월)
/*
  1. 내적
*/
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
