// 24-11-18 (월)

/**
 * 1. rny_string
 */
function solution(rny_string) {
  return rny_string.replaceAll("m", "rn");
}

/**
 * 2. 공백으로 구분하기 (2)
 */
function solution(my_string) {
  return my_string.split(" ").filter((str) => str != "");
}

/**
 * 3. 공백으로 구분하기 (1)
 */
function solution(my_string) {
  return my_string.split(" ");
}

/**
 * 4. 특정한 문자를 대문자로 바꾸기
 */
function solution(my_string, alp) {
  return my_string.replaceAll(alp, alp.toUpperCase());
}

/**
 * 5. A 강조하기
 */
function solution(myString) {
  return myString.toLowerCase().replaceAll("a", "A");
}
