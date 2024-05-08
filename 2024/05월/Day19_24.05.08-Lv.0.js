// 24-05-08 (수)
/*
  1. 원소들의 곱과 합
*/
function solution(num_list) {
  let mul = 1;
  let squ = 0;
  
  for (let i = 0; i < num_list.length; i++) {
      mul *= num_list[i];
      squ += num_list[i];
  }
  if (mul < squ**2) {
      return 1;
  } else {
      return 0;
  }
}

