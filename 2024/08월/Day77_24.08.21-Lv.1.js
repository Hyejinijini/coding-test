// 24-08-21 (수)
/*
  1. 평균 구하기
*/
function solution(arr) {
  let answer = 0;

  for (let num of arr) {
    answer += num;
  }

  return answer / arr.length;
}
