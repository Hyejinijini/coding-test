// 24-05-28 (화)
/*
  1. 두 수의 나눗셈
*/
function solution(num1, num2) {   
  return parseInt((num1 / num2)*1000);
}


// 24-05-28 (화)
/*
  2. 숫자 비교하기
*/
function solution(num1, num2) {   
  return (num1 === num2) ? 1 : -1;
}


// 24-05-28 (화)
/*
  3. 배열 두 배 만들기
*/
function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    answer.push(numbers[i]*2);
  }
  return answer;
}
