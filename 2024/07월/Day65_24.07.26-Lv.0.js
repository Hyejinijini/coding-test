// 24-07-26 (금)
/*
  1. 배열 만들기 3
*/
function solution(arr, intervals) {
  return arr.slice(intervals[0][0], intervals[0][1] + 1).concat(arr.slice(intervals[1][0], intervals[1][1] + 1));
}
