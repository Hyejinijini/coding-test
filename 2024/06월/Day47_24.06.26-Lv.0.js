// 24-06-26 (수)
/*
  1. 자릿수 더하기
*/
function solution(n) {
  let answer = 0;
  let str = String(n);
  let arr = [...str];
  
  arr.map((item) => {
    answer += Number(item);
  });
  
  return answer;
}