// 24-11-19 (화)

/**
 * 1. 배열에서 문자열 대소문자 변환하기
 */
function solution(strArr) {
  return strArr.map((item, index) => {
    return index % 2 ? item.toUpperCase() : item.toLowerCase();
  });
}

/**
 * 2. 소문자로 바꾸기
 */
function solution(myString) {
  return myString.toLowerCase();
}

/**
 * 3. 대문자로 바꾸기
 */
function solution(myString) {
  return myString.toUpperCase();
}

/**
 * 4. 원하는 문자열 찾기
 */
function solution(myString, pat) {
  return myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
}

/**
 * 5. 5명씩
 */
function solution(names) {
  let answer = [];

  for (let i = 0; i < names.length; i += 5) {
    answer.push(names[i]);
  }

  return answer;
}
