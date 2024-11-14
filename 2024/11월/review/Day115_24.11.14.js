// 24-11-14 (목)

/**
 * 1. 문자열을 정수로 변환하기
 */
function solution(n_str) {
  return +n_str;
}

/**
 * 2. 문자열 정수의 합
 */
function solution(num_str) {
  return [...num_str].reduce((acc, cur) => acc + +cur, 0);
}

/**
 * 3. 정수 부분
 */
function solution(flo) {
  return parseInt(flo);
}

/**
 * 4. 뒤에서 5등까지
 */
function solution(num_list) {
  return num_list.sort((a, b) => a - b).slice(0, 5);
}

/**
 * 5. 배열 비교하기
 */
function solution(arr1, arr2) {
  if (arr1.length === arr2.length) {
    let sumArr1 = arr1.reduce((acc, cur) => acc + cur, 0);
    let sumArr2 = arr2.reduce((acc, cur) => acc + cur, 0);

    return sumArr1 > sumArr2 ? 1 : sumArr1 < sumArr2 ? -1 : 0;
  }

  return arr1.length > arr2.length ? 1 : arr1.length < arr2.length ? -1 : 0;
}
