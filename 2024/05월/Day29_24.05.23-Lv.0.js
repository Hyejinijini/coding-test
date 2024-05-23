// 24-05-23 (목)
/*
  1. 조건 문자열
*/
function solution(ineq, eq, n, m) {
  if (eq === '=' && n === m) {
    return 1;
  } else if (ineq === '<' && n < m) {
    return 1;
  } else if (ineq === '>' && n > m) {
    return 1;
  }
  return 0;
}


// 24-05-23 (목)
/*
  2. 문자열 겹쳐쓰기
*/
function solution(my_string, overwrite_string, s) {
  const str = [...my_string];
  str.splice(s, overwrite_string.length, overwrite_string);
  return str.join("");
}


// 24-05-23 (목)
/*
  3. qr code
*/
function solution(q, r, code) {
  let answer = [];
  const newCode = [...code];
  for (let i = 0; i < newCode.length; i++) {
    if (i % q === r) {
      answer.push(newCode[i]);
    }
  }
  return answer.join('');
}