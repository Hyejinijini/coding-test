// 24-04-02 (화)
/*
  더 크게 합치기
*/
function solution(a, b) {
    let answer = 0;
    
    if (String(a) + String(b) >= String(b) + String(a)) {
        A = String(a) + String(b);
        answer = Number(A);
    } else {
        B = String(b) + String(a);
        answer = Number(B);
    }
    
    return answer;
}


// 24-04-03 (수)
/*
  부분 문자열인지 확인하기
*/
function solution(my_string, target) {
    
  if (my_string.includes(target)) {
      return 1;
  } else {
      return 0;
  }
  
}