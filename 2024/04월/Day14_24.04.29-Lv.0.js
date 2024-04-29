// 24-04-29 (월)
/*
  1. 정수 부분
*/
function solution(flo) {
  return result = parseInt(flo);
}


// 24-04-29 (월)
/*
  2. 배열 비교하기
*/
function solution(arr1, arr2) {

  if (arr1.length > arr2.length) {
      return 1;
  } else if (arr1.length < arr2.length) {
      return -1;
  } else {
      let sum1 = 0;
      let sum2 = 0;
      
      for (let i = 0; i < arr1.length; i++) {
          sum1 += arr1[i];
      }
      for (let j = 0; j < arr2.length; j++) {
          sum2 += arr2[j];
      }
      
      if (sum1 > sum2) {
          return 1;
      } else if (sum1 < sum2) {
          return -1;
      } else {
          return 0;
      }
  }
}


// 24-04-29 (월)
/*
  3. 배열의 원소만큼 추가하기
*/
function solution(arr) {
  let X = [];
  
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i]; j++) {
          X.push(arr[i]);
      }
  }
  
  return X;
}


// 24-04-29 (월)
/*
  4. rny_string
*/
function solution(rny_string) {
  return rny_string.split('m').join('rn');
}

