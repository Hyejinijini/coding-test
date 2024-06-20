// 24-06-21 (금)
/*
  1. 가위 바위 보
*/
function solution(rsp) {
  let answer = '';
  let r = '0';
  let s = '2';
  let p = '5';
  
  for (let i = 0; i < rsp.length; i++) {
    if (rsp[i] === r) {
      answer += p;
    } else if (rsp[i] === s) {
      answer += r;
    } else if (rsp[i] === p) {
      answer += s;
    }
  }
  
  return answer;
}