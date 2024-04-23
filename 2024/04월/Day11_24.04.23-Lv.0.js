// 24-04-23 (화)
/*
  조건에 맞게 수열 변환하기 1

*/
function solution(arr) {
  let answer = [];
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 50 && arr[i] % 2 === 0) {
          answer.push(arr[i] / 2);
      } else if (arr[i] < 50 && arr[i] % 2 === 1) {
          answer.push(arr[i] * 2);
      } else {
          answer.push(arr[i]);
      }
  }
  return answer;
}