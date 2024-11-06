// 24-11-06 (수)

/**
 * 1. 양꼬치
 */
function solution(n, k) {
  return 12000 * n + 2000 * k - 2000 * parseInt(n * 0.1);
}

/**
 * 2. 짝수의 합
 */
function solution(n) {
  let answer = 0;

  for (let i = 0; i <= n; i++) {
    // 조건을 let i = 2; i <= n; i+=2 로 하면 더 간단하게 풀 수 있었음.
    if (i % 2 === 0) answer += i;
  }

  return answer;
}

/**
 * 3. 편지
 */
function solution(message) {
  return message.length * 2;
}

/**
 * 4. 배열 뒤집기
 */
function solution(num_list) {
  return num_list.reverse(); // 배열 뒤집는 메서드
}

/**
 * 5. 짝수 홀수 개수
 */
function solution(num_list) {
  let evenNum = 0;
  let oddNum = 0;

  num_list.forEach((num) => {
    num % 2 ? oddNum++ : evenNum++;
  });

  return [evenNum, oddNum];
}
