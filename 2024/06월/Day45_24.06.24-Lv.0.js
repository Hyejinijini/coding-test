// 24-06-24 (월)
/*
  1. 대문자와 소문자
*/
function solution(my_string) {
  let strArr = [...my_string];
  let arr = [];

  strArr.map((item) => {
    arr.push(item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase());
  }); 
  
  return arr.join('');
}