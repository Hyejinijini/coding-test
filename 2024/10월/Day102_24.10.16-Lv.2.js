// 24-10-16 (수)
/*
  1. JadenCase 문자열 만들기
*/
function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
