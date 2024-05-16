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

// 24-05-16 (목)
/*
  3. 주사위 게임 2
*/
function solution(a, b, c) {
    
  if (a!==b && a!==c && b!==c) {
      return a+b+c;
  } else if (a===b && a===c && b===c) {
      return (a+b+c)*(a**2+b**2+c**2)*(a**3+b**3+c**3);
  } else {
      return (a+b+c)*(a**2+b**2+c**2);
  }

}