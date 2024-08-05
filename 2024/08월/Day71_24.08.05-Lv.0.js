// 24-08-05 (월)
/*
  1. 7의 개수
*/
function solution(array) {
  let answer = 0;

  array.forEach((el) => {
    // el을 문자열로 변환하고 '7'을 기준으로 분할한 배열의 길이에서 1을 뺌
    answer += el.toString().split("7").length - 1;
  });

  return answer;
}
