// 24-05-21 (화)
/*
  1. 날짜 비교하기
*/
function solution(date1, date2) {
  return new Date(date1) < new Date(date2) ? 1 : 0;
}

// 24-05-21 (화)
/*
  2. 빈 배열에 추가, 삭제하기
*/
function solution(arr, flag) {
  let answer = [];
  
  for (let i = 0; i < flag.length; i++) {
    if (flag[i]) {
      for (let j = 0; j < arr[i]*2; j++) {
        answer.push(arr[i]);
      }
    } else {
      answer.splice(-arr[i], arr[i])
    }
  }
  
  return answer;
}
