// 24-10-04 (목)
/*
  1. 최댓값 만들기 (2)
*/
function solution(numbers) {
  let a = 0;
  let b = 0;

  numbers.sort((a, b) => b - a);
  a += numbers[0] * numbers[1];

  numbers.sort((a, b) => a - b);
  b += numbers[0] * numbers[1];

  return a > b ? a : b;
}
