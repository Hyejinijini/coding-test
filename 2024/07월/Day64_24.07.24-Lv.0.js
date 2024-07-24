// 24-07-24 (수)
/*
  1. 부분 문자열 이어 붙여 문자열 만들기
*/
function solution(my_strings, parts) {
  let answer = [];

  for (let i = 0; i < my_strings.length; i++) {
    answer.push(my_strings[i].slice(parts[i][0], parts[i][1] + 1));
  }

  return answer.join("");
}
