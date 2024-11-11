// 24-11-11 (월)

/**
 * 1. 문자열 뒤집기
 */
function solution(my_string) {
  return my_string.split("").reverse().join("");
}

/**
 * 2. 머쓱이보다 키 큰 사람
 */
function solution(array, height) {
  let answer = 0;

  array.map((num) => {
    if (num > height) answer++;
  });

  return answer;
}

/**
 * 3. 배열 두배 만들기
 */
function solution(numbers) {
  return numbers.map((num) => num * 2);
}

/**
 * 4. 중앙값 구하기
 */
function solution(array) {
  let sortedArray = array.sort((a, b) => a - b);
  return sortedArray[Math.floor(sortedArray.length / 2)];
}

/**
 * 5. 짝수는 싫어요
 */
function solution(n) {
  let answer = [];

  for (let i = 1; i <= n; i += 2) {
    answer.push(i);
  }

  return answer;
}
