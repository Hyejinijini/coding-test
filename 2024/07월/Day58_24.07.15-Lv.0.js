// 24-07-15 (월)
/*
  1. 숫자 찾기
*/
function solution(num, k) {
  let numArr = [...num.toString()];

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === k.toString()) {
      return i + 1; // 자릿수는 1부터 시작
    }
  }

  return -1; // k가 num에 없을 경우
}
