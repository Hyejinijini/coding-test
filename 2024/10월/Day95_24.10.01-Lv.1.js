// 24-10-01 (화)
/*
  1. 핸드폰 번호 가리기
*/
function solution(phone_number) {
  let frontNum = phone_number.slice(-0, -4);
  let backNum = phone_number.split(frontNum).join("");

  return frontNum.replaceAll(/./g, "*") + backNum;
}
