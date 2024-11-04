// 24-11-04 (월)

/**
 * 1. 몫 구하기
 */
function solution(num1, num2) {
  return Math.floor(num1 / num2); // 소수점 부분은 버리기 위해서 Math.floor 사용
}

/**
 * 2. 나머지 구하기
 */
function solution(num1, num2) {
  return num1 % num2; // 나머지 연산자를 이용해서 풀이
}

/**
 * 3. 두 수의 차
 */
function solution(num1, num2) {
  return num1 - num2;
}

/**
 * 4. 숫자 비교하기
 */
function solution(num1, num2) {
  return num1 === num2 ? 1 : -1; // 삼항 연산자를 이용해서 풀이
}

/**
 * 5. 나이 출력
 */
function solution(age) {
  return 2022 - age + 1;
}
