// 24-08-07 (수)
/*
  1. 개미 군단
*/
function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + Math.floor((hp % 5) % 3);
}
