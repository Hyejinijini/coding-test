// 24-07-04 (목)
/*
  1. 문자열안에 문자열
*/
function solution(str1, str2) {
  if (str1.includes(str2)) {
    return 1;
  } else {
    return 2;
  }
}
