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


// 24-04-30 (화)
/*
  3. 소문자로 바꾸기
*/
function solution(myString) {
  return myString.toLowerCase();
}


// 24-04-30 (화)
/*
  4. 대문자로 바꾸기
*/
function solution(myString) {
  return myString.toUpperCase();
}


// 24-04-30 (화)
/*
  5. 원하는 문자열 찾기
*/
function solution(myString, pat) {
    
  if(myString.toLowerCase().includes(pat.toLowerCase())) {
      return 1;
  } else {
      return 0;
  }
  
}