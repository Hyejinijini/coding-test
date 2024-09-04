// 24-09-04 (수)
/*
  1. 하샤드 수
*/
function solution(x) {
  let sum = String(x)
    .split("")
    .reduce((acc, num) => (acc += Number(num)), 0);

  return x % sum === 0;
}
