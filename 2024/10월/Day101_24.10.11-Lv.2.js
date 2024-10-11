// 24-10-11 (금)
/*
  1. 전화번호 목록
*/
function solution(phone_book) {
  let answer = true;

  // 전화번호부 정렬
  phone_book.sort();

  // 전화번호부 돌면서 요소 확인
  for (let i = 0; i < phone_book.length - 1; i++) {
    // "119" 랑 "1195524421" 비교
    // 이때 "1195524421" 은 substring 을 사용해서 119까지 잘라서 확인
    if (phone_book[i] === phone_book[i + 1].slice(0, phone_book[i].length)) {
      return !answer;
    }
  }

  return answer;
}
