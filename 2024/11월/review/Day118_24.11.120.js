// 24-11-20 (수)

/**
 * 1. 조건에 맞게 수열 변환하기 1
 */
function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i] >= 50 && arr[i] % 2 === 0 ? answer.push(arr[i] / 2) : arr[i] < 50 && arr[i] % 2 === 1 ? answer.push(arr[i] * 2) : answer.push(arr[i]);
  }

  return answer;
}

/**
 * 2. n보다 커질 때까지 더하기
 */
function solution(numbers, n) {
  let answer = 0;

  numbers.forEach((num) => {
    if (answer <= n) answer += num;
  });

  return answer;
}

/**
 * 3. 할 일 목록
 */
function solution(todo_list, finished) {
  let answer = [];

  for (let i = 0; i < todo_list.length; i++) {
    if (!finished[i]) answer.push(todo_list[i]);
  }

  return answer;
}

/**
 * 4. 홀수 vs 짝수
 */
function solution(num_list) {
  let even = 0;
  let odd = 0;

  for (let i = 0; i < num_list.length; i++) {
    if (i % 2 === 0) {
      odd += num_list[i];
    } else if (i % 2 === 1) {
      even += num_list[i];
    }
  }

  return odd >= even ? odd : even;
}

/**
 * 5. n개 간격의 원소들
 */
function solution(num_list, n) {
  let answer = [];

  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list[i]);
  }

  return answer;
}
