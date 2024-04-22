// 24-04-21 (일)
/*
  n보다 커질 때까지 더하기
*/
function solution(numbers, n) {
  let answer = 0;
  
  for (let i = 0; i < numbers.length; i++) {
      answer += numbers[i];
      
      if (answer > n) {
          return answer;
      }
  }
  
}