// 24-05-06 (월)
/*
  1. 문자열의 앞의 n글자
*/
function solution(my_string, n) {
  return my_string.substring(0, n);
}


// 24-05-06 (월)
/*
  2. 문자열의 뒤의 n글자
*/
function solution(my_string, n) {
  return my_string.slice(-n);
}


// 24-05-06 (월)
/*
  3. 수 조작하기 1
*/
function solution(n, control) {
  for (let i = 0; i < control.length; i++) {
      switch (control[i]) { 
          case "w": n ++; break;
          case "s": n --; break;
          case "d": n += 10; break;
          case "a": n -= 10; break;   
      }
  }    
  return n;
}