// 24-08-30 (금)
/*
  1. 자연수 뒤집어 배열로 만들기
*/
function solution(n) {
  return String(n)
    .split("")
    .reverse()
    .map((numStr) => Number(numStr));
}
