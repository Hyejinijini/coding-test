// 24-05-17 (금)
/*
  1. 문자 리스트를 문자열로 변환하기
*/
function solution(arr) {
  return arr.join("");
}

// 24-05-17 (금)
/*
  2. 가까운 1 찾기
*/
function solution(arr, idx) {
  for(let i = idx; i < arr.length; i++) {
    if (arr[i] == 1) {
      return i;
    }   
  }
  return -1;
}

// 24-05-17 (금)
/*
  3. 세로 읽기
*/
function solution(my_string, m, c) {
  let answer = '';
  
  for (let i = c-1; i < my_string.length; i+=m) {
    answer += my_string[i];
  }
  
  return answer;
}