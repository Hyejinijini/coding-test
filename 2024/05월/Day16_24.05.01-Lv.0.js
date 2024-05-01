// 24-05-01 (수)
/*
  1. 5명씩
*/
function solution(names) {
  let answer = [];
  
  for (let i = 0; i < names.length; i+=5) {
      answer.push(names[i]);
  }
  
  return answer;
}


// 24-05-01 (수)
/*
  2. n 번째 원소까지
*/
function solution(num_list, n) {
  let answer = [];
  
  for (let i = 0; i < n; i++) {
      answer.push(num_list[i]);
  }
  
  return answer;
}

