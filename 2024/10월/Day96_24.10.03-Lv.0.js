// 24-10-03 (수)
/*
  1. 최댓값 만들기 (1)
*/
function solution(numbers) {
  let sortedNumbers = numbers.sort((a, b) => b - a);
  return sortedNumbers[0] * sortedNumbers[1];
}
