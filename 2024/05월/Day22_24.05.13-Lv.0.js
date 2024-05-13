// 24-05-13 (월)
/*
  1. 부분 문자열
*/
function solution(str1, str2) {
  return str2.includes(str1) ? 1 : 0;
}

// 24-05-13 (월)
/*
  2. 0 떼기
*/
function solution(n_str) {
  return String(Number(n_str));
}

// 24-05-13 (월)
/*
  3. 뒤에서 5등 위로
*/
function solution(num_list) {
    
  for (let i = 0; i < num_list.length; i++) {
      num_list.sort(function(a, b){
          return a-b;
      })
  }
  return num_list.slice(5);
}