// 24-07-31 (수)
/*
  1. 커피 심부름
*/
function solution(order) {
  let answer = 0;

  order.map((menu) => {
    if (menu.includes("americano")) {
      answer += 4500;
    } else if (menu.includes("cafelatte")) {
      answer += 5000;
    } else {
      answer += 4500;
    }
  });

  return answer;
}
