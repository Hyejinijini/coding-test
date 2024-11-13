// 24-11-13 (수)

/**
 * 1. 개미 군단
 */
function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + Math.floor((hp % 5) % 3);
}

/**
 * 2. 숨어있는 숫자의 덧셈 (1)
 */
function solution(my_string) {
  let result = 0;
  my_string.split("").map((item) => {
    if (!isNaN(item)) result += Number(item);
  });
  return result;
}

/**
 * 3. 대문자와 소문자
 */
function solution(my_string) {
  return [...my_string]
    .map((item) => {
      return item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();
    })
    .join("");
}

/**
 * 4. n의 배수 고르기
 */
function solution(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}

/**
 * 5. 문자열로 변환
 */
function solution(n) {
  return String(n);
}
