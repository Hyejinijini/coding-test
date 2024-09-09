// 24-09-09 (월)
/*
  1. 문자열 내 p와 y의 개수
*/
function solution(s) {
  let countP = 0;
  let countY = 0;

  s.split("").map((str) => {
    switch (str) {
      case "p":
        countP++;
        break;
      case "P":
        countP++;
        break;
      case "y":
        countY++;
        break;
      case "Y":
        countY++;
        break;
    }
  });

  return countP === countY ? true : false;
}
