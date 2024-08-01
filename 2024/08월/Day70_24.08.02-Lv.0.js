// 24-08-02 (금)
/*
  1. 배열의 유사도
*/
function solution(s1, s2) {
  let answer = 0;
  s1.map((el) => {
    s2.map((el2) => {
      el === el2 ? (answer += 1) : (answer += 0);
    });
  });
  return answer;
}
