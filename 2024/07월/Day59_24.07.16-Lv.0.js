// 24-07-16 (화)
/*
  1. 코드 처리하기
*/
function solution(code) {
  let ret = "";
  let mode = 0;

  for (let i = 0; i < code.length; i++) {
    if (code[i] === "1") {
      mode = mode === 0 ? 1 : 0;
    }
    if (mode === 0) {
      if (code[i] !== "1" && i % 2 === 0) {
        ret += code[i];
      }
    } else if (mode === 1) {
      if (code[i] !== "1" && i % 2 === 1) {
        ret += code[i];
      }
    }
  }
  return ret === "" ? "EMPTY" : ret;
}
