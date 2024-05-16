// 24-05-16 (목)
/*
  1. 9로 나눈 나머지
*/
function solution(number) {
  let answer = 0;
  
  for (let i = 0; i < number.length; i++) {
      answer += number[i];
      answer = Number(answer) % 9;
  }
  
  return answer;
}
