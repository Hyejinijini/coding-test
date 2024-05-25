// 24-05-25 (토)
/*
  1. 문자열 출력하기
*/
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close',function(){
  str = input[0];
  console.log(str);
});


// 24-05-25 (토)
/*
  2. a와 b 출력하기
*/
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  const a = input[0];
  const b = input[1];
  console.log(`a = ${a}`);
  console.log(`b = ${b}`);
});

