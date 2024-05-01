// 24-05-01 (수)
/*
  1. 5명씩
*/
function solution(names) {
  let answer = [];
  
  for (let i = 0; i < names.length; i+=5) {
      answer.push(names[i]);
  }
  
  return answer;
}

