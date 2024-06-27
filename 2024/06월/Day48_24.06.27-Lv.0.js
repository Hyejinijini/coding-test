// 24-06-27 (목)
/*
  1. 배열 자르기
*/
function solution(numbers, num1, num2) {
  let answer = [];
  answer = numbers.slice(num1, num2+1);
  return answer;
}