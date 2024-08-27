// 24-08-27 (화)
/*
  1. 문자열을 정수로 바꾸기
*/
function solution(s) {
  return Number(s);
}

/*
  2. 자릿수 더하기
*/
function solution(n) {
  let answer = 0;
  let numStr = String(n).split("");

  for (let num of numStr) {
    answer += Number(num);
  }

  return answer;
}
