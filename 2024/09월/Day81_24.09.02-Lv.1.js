// 24-09-02 (월)
/*
  1. 정수 내림차순으로 배치하기
*/
function solution(n) {
  return parseInt(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}
