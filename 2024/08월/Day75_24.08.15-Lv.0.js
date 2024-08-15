// 24-08-15 (목)
/*
  1. 외계행성의 나이
*/
function solution(age) {
  const programmersAge = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  const ageStr = age.toString();

  let answer = ageStr
    .split("")
    .map((i) => programmersAge[i])
    .join("");

  return answer;
}
