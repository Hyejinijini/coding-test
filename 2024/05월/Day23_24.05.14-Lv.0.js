// 24-05-14 (화)
/*
  1. 공백으로 구분하기 2
*/
function solution(my_string) {
  return my_string.split(" ").filter(v=>v !== "");
}

// 24-05-14 (화)
/*
  2. 배열의 원소 삭제하기
*/
function solution(arr, delete_list) {
  return arr.filter(v => !delete_list.includes(v));
}
