// 24-07-30 (화)
/*
  1. 모음 제거
*/
function solution(my_string) {
  let answer = [];
  let vowels = ["a", "e", "i", "o", "u"];
  let strArr = my_string.split("");

  for (let i = 0; i < strArr.length; i++) {
    if (!vowels.includes(strArr[i])) answer.push(strArr[i]);
  }

  return answer.join("");
}
