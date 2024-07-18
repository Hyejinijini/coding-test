// 24-07-18 (목)
/*
  1. 짝수 홀수 개수
*/
function solution(num_list) {
  let odd = 0;
  let even = 0;

  for (let i = 0; i < num_list.length; i++) {
    num_list[i] % 2 === 0 ? even++ : odd++;
  }

  return [even, odd];
}
