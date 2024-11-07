// 24-11-07 (목)

/**
 * 1. 문자열안에 문자열
 */
function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

/**
 * 2. 배열 자르기
 */
function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

/**
 * 3. 삼각형의 완성조건 (1)
 */
function solution(sides) {
  sides.sort((a, b) => a - b);
  return sides[0] + sides[1] > sides[2] ? 1 : 2;
}

/**
 * 4. 최댓값 만들기 (1)
 */
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}

/**
 * 5. 중복된 숫자 개수
 */
function solution(array, n) {
  let answer = 0;

  array.forEach((num) => {
    if (num === n) answer++;
  });

  return answer;
}
