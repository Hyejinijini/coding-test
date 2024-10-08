// 24-10-04 (목)
/*
  1. 최댓값과 최솟값
*/
function solution(s) {
  let newS = s.split(" ");
  let maxNum = Math.max(...newS);
  let minNum = Math.min(...newS);

  let answer = [minNum, maxNum];
  return answer.join(" ");
}
