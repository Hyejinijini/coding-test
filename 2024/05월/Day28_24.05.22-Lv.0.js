// 24-05-22 (수)
/*
  1. 문자열 뒤집기
*/
function solution(my_string, s, e) {
  let arr1 = my_string.slice(0, s);
  let arr2 = my_string.slice(s, e + 1).split('').reverse().join(''); 
  let arr3 = my_string.slice(e + 1);
  
  return arr1 + arr2 + arr3;
}


// 24-05-22 (수)
/*
  2. 문자열 섞기
*/
function solution(str1, str2) {
  let answer = '';
  
  for(let i = 0; i < str1.length; i++) {
    answer += str1[i] + str2[i];
  }
  
  return answer;
}
