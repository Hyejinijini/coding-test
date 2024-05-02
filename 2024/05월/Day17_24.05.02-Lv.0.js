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


// 24-05-02 (목)
/*
  2. 카운트 다운
*/
function solution(start_num, end_num) {
  let answer = [];
  
  for (let i = end_num; i <= start_num; i++) {
      answer.push(i);
  }
  answer.sort(function (a, b) {
      return b - a;
  })

  return answer;
}

