// 24-06-25 (화)
/*
  1. n의 배수 고르기
*/
function solution(n, numlist) {
  let answer = [];
  
  numlist.map((item) => {
    if (item % n === 0) return answer.push(item);
  })
  
  return answer;
}