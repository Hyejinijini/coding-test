// 24-07-29 (월)
/*
  1. ad 제거하기
*/
function solution(strArr) {
  let answer = [];

  answer = strArr.filter((item) => {
    return !item.includes("ad");
  });

  return answer;
}
