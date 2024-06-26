// 24-05-20 (월)
/*
  1. 등차수열의 특정한 항만 더하기
*/
function solution(a, d, included) {
  let answer = 0;
  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      answer += (a + i * d);
    } 
  }
  return answer;
}

// 24-05-20 (월)
/*
  2. 접미사 배열
*/
function solution(my_string) {
  let answer = [];
  for(let i = 0; i < my_string.length; i++) {
    answer.push(my_string.substr(i, my_string.length));  
  } 
  return answer.sort()
}

// 24-05-20 (월)
/*
  3. 콜라츠 수열 만들기
*/
function solution(n) {
  let answer = [];
  while (n !== 1) {
    answer.push(n)
    if (n%2 === 0) {
        n /= 2;
    } else if (n%2 === 1) {
        n = 3*n+1;
    }
  }
  answer.push(1);
  return answer;
}