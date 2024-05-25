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


// 24-05-25 (토)
/*
  3. 문자열 반복해서 출력하기
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
  str = input[0];
  n = Number(input[1]);
  console.log(str.repeat(n));
});


// 24-05-25 (토)
/*
  4. 덧셈식 출력하기
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
  const a = Number(input[0]);
  const b = Number(input[1]);
  console.log(`${a} + ${b} = ${a+b}`);
});


//24-05-25 (토)
/*
  5. 문자열 붙여서 출력하기
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
  str1 = input[0];
  str2 = input[1];
  console.log(str1+str2);
});


//24-05-25 (토)
/*
  6. 홀짝 구분하기
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
  n = Number(input[0]);
  n%2 === 0 ? console.log(`${n} is even`) : console.log(`${n} is odd`);
});


//24-05-25 (토)
/*
  7. 대소문자 바꿔서 출력하기
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
  let arr = [];
  str.split('');
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i] === str[i].toUpperCase() ? str[i].toLowerCase() : str[i].toUpperCase());
  }
  console.log(arr.join(''));
});

