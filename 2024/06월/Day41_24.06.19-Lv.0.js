// 24-06-19 (수)
/*
  1. 옷가게 할인 받기
*/
function solution(price) {
  if (price < 100000) {
    return Math.floor(price);
  } else if (100000 <= price && price < 300000) {
    return Math.floor(price*0.95);
  } else if (300000 <= price && price < 500000) {
    return Math.floor(price*0.9);
  } else {
    return Math.floor(price*0.8);
  }
}