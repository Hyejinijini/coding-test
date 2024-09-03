// 24-09-03 (화)
/*
  1. 두 정수 사이의 합
*/
function solution(a, b) {
  let answer = 0;

  if (a < b || a == b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  }

  return answer;
}
