// 24-07-23 (화)
/*
  1. 삼각형의 완성조건 (1)
*/
function solution(sides) {
  let sortArr = 0;

  sortArr = sides.sort((a, b) => a - b);

  return sortArr[0] + sortArr[1] > sortArr[2] ? 1 : 2;
}
