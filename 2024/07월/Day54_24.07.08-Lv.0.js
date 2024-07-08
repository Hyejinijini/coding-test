// 24-07-08 (월)
/*
  1. 문자열 바꿔서 찾기
*/
function solution(myString, pat) {
  let answer = "";

  for (let i = 0; i < myString.length; i++) {
    if (myString[i] === "A") {
      answer += "B";
    } else {
      answer += "A";
    }
  }

  if (answer.includes(pat)) {
    return 1;
  } else {
    return 0;
  }
}
