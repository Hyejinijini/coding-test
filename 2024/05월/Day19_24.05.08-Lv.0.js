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

// 24-05-08 (수)
/*
  2. 홀짝에 따라 다른 값 반환하기
*/
function solution(n) {
  if (n % 2 === 1) {
      let oddSum = 0;
      for (let i = 1; i <= n; i+=2) {
          oddSum += i;
      }
      return oddSum;
  } else if (n % 2 === 0) {
      let evenSum = 0;
      for (let j = 2; j <= n; j+=2) {
          evenSum += j**2;
      }
      return evenSum;
  }
}

