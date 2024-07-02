// 24-07-02 (화)
/*
  1. 특정 문자 제거하기
*/
function solution(my_string, letter) {
  return my_string
    .split("")
    .filter((e) => e !== letter)
    .join("");
}
