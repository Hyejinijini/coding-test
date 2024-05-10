// 24-05-10 (금)
/*
  1. 주사위 게임 1
*/
function solution(a, b) {  
  if (a % 2 === 1 && b % 2 === 1) {
      return ((a**2)+(b**2));
  } else if (a % 2 === 1 || b % 2 === 1) {
      return (2*(a+b));
  } else {
      return Math.abs(a-b);
  }
}

// 24-05-10 (금)
/*
  2. 꼬리 문자열
*/
function solution(str_list, ex) {
  let answer = '';
  
  for (let i = 0; i < str_list.length; i++) {
      if (!str_list[i].includes(ex)) {
          answer += str_list[i];
      }   
  }
  return answer;
}

