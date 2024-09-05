// 24-09-05 (목)
/*
  1. 제일 작은 수 제거하기
*/
function solution(arr) {
  let answer = [];

  if (arr.length === 1) {
    answer.push(-1);
  } else {
    let min = Math.min(...arr);
    answer = arr.filter((num) => num !== min);
  }

  return answer;
}
