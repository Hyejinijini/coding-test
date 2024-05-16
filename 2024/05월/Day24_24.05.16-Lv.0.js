// 24-05-16 (목)
/*
  1. 9로 나눈 나머지
*/
function solution(number) {
  let answer = 0;
  
  for (let i = 0; i < number.length; i++) {
      answer += number[i];
      answer = Number(answer) % 9;
  }
  
  return answer;
}

// 24-05-16 (목)
/*
  2. 문자열 잘라서 정렬하기
*/
function solution(myString) {
  let arr = [];

  arr = myString.split("x").sort();
  
  let newArr = arr.filter(function(str) {
      return str !== "";
  });

  return newArr;
}
