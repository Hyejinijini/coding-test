// 24-11-05 (화)

/**
 * 1. 두 수의 곱
 */
function solution(num1, num2) {
  return num1 * num2;
}

/**
 * 2. 두 수의 합
 */
function solution(num1, num2) {
  return num1 + num2;
}

/**
 * 3. 두 수의 나눗셈
 */
function solution(num1, num2) {
  return Math.floor((num1 / num2) * 1000);
}

/**
 * 4. 배열의 평균값
 */
function solution(numbers) {
  let total = 0;

  numbers.forEach((num) => {
    total += num;
  });

  return total / numbers.length;
}

/**
 * 5. 각도기
 */
function solution(angle) {
  if (0 < angle && angle < 90) return 1;
  if (angle === 90) return 2;
  if (90 < angle && angle < 180) return 3;
  if (angle === 180) return 4;
}
