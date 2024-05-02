// 24-05-02 (목)
/*
  1. 첫 번째로 나오는 음수
*/
function solution(num_list) {
    
  for (let i = 0; i < num_list.length; i++) {
      if (num_list[i] < 0) {
          return i;
      }
  }
  return -1;
}

