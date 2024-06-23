// 24-06-23 (일)
/*
  1. 암호 해독
*/
function solution(cipher, code) {
  let answer = '';
  for (let i = code-1; i < cipher.length; i+=code) {
    answer += cipher[i];
  }
  return answer;
}