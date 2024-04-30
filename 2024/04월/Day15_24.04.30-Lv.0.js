// 24-04-30 (화)
/*
  1. A 강조하기
*/
function solution(myString){
  return myString.toLowerCase().replaceAll("a", "A");
}


// 24-04-30 (화)
/*
  2. 배열에서 문자열 대소문자 변환하기
*/
function solution(strArr) {
    
  for (let i = 0; i < strArr.length; i++) {
      if (i % 2 === 1) {
          strArr[i] = strArr[i].toUpperCase();
      } else if (i % 2 === 0) {
          strArr[i] = strArr[i].toLowerCase();
      }
  }
  return strArr;
}
