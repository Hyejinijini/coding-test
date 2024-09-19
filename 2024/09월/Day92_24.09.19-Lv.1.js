// 24-09-19 (목)
/*
  1. 음양 더하기
*/
function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < signs.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }

  return answer;
}
