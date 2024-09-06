// 24-09-06 (금)
/*
  1. 같은 숫자는 싫어
*/
function solution(arr) {
  let answer = [];

  answer = arr.filter((num, index) => num !== arr[index + 1]);

  return answer;
}
