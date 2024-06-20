// 24-06-20 (목)
/*
  1. 아이스 아메리카노
*/
function solution(money) {
  let answer = [];
  let glass = Math.floor(money/5500);
  let change = money % 5500;
  
  answer.push(glass, change);
  
  return answer;
}