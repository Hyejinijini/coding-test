// 24-06-13 (목)
/*
  1. 중복된 숫자 개수
*/
function solution(array, n) {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
        answer ++;
    }
  }
  return answer;
}