// 24-11-12 (화)

/**
 * 1. 문자열 붙여서 출력하기
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  str1 = input[0];
  str2 = input[1];

  console.log(str1 + str2);
});

/**
 * 2. 피자 나눠 먹기 (1)
 */
function solution(n) {
  return n / 7 < 1 ? 1 : Math.ceil(n / 7);
}

/**
 * 3. 옷가게 할인 받기
 */
function solution(price) {
  let answer = price;

  if (price >= 100000 && price < 300000) answer *= 0.95;
  if (price >= 300000 && price < 500000) answer *= 0.9;
  if (price > 300000 && price >= 500000) answer *= 0.8;
  else answer;

  return Math.floor(answer);
}

/**
 * 4. 아이스 아메리카노
 */
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}

/**
 * 5. 가위 바위 보
 */
function solution(rsp) {
  return rsp
    .split("")
    .map((item) => {
      switch (item) {
        case "0":
          return "5";
        case "2":
          return "0";
        case "5":
          return "2";
      }
    })
    .join("");
}
