// 24-04-24 (수)
/*
  문자열을 정수로 변환하기
*/
function solution(n_str) {
  return Number(n_str);
}


/*
  배열의 길이에 따라 다른 연산하기
*/
function solution(arr, n) {
  let answer = [];
  
  for (let i = 0; i < arr.length; i++) {
      if (arr.length % 2 === 1) {
          if (i % 2 === 0) {
              answer.push(arr[i] + n);
          } else {
              answer.push(arr[i]);
          }
      } else if (arr.length % 2 === 0) {
          if (i % 2 === 1) {
              answer.push(arr[i] + n);
          } else {
              answer.push(arr[i]);
          }
      }
  }
  return answer;
}