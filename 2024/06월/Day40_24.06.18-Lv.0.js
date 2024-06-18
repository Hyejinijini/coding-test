// 24-06-18 (화)
/*
  1. 머쓱이보다 키 큰 사람
*/
function solution(array, height) {
  return array.filter((item) => item > height).length;
}