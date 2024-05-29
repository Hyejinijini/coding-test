// 24-05-29 (수)
/*
  1. 나머지 구하기
*/
function solution(num1, num2) {   
  return num1 % num2;
}


// 24-05-29 (수)
/*
  2. 나이 출력
*/
function solution(age) {
  return (2022 - age + 1);
}


// 24-05-29 (수)
/*
  3. 배열의 평균값
*/
function solution(numbers) {
  let answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
  }
  return answer / numbers.length;
}
