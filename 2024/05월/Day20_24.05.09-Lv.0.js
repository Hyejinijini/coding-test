// 24-05-09 (목)
/*
  1. n의 배수
*/
function solution(num, n) {
  return (num % n === 0) ? 1 : 0;
}


// 24-05-09 (목)
/*
  2. 두 수의 연산값 비교하기
*/
function solution(a, b) {
  let str = String(a) + String(b);
  
  if(str > (2 * a * b)) {
      return Number(str);        
  } else if (str < (2 * a * b)) {
      return (2 * a * b);
  } else {
      return Number(str);
  }
}


// 24-05-09 (목)
/*
  3. 문자열 곱하기
*/
function solution(my_string, k) {
  let answer = '';
  
  for (let i = 0; i < k; i++) {
      answer += my_string;
  }
  
  return answer;
}