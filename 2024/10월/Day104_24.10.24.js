// 24-10-24 (목)
/*
  1. 팰린드롬 숫자
*/
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  let arrX = String(x).split("");
  let reverseX = [...arrX].reverse();

  console.log(x, arrX, reverseX);

  if (x > 0) {
    return arrX.join("") === reverseX.join("") ? true : false;
  } else if (x === 0) {
    return true;
  } else {
    return false;
  }
};
