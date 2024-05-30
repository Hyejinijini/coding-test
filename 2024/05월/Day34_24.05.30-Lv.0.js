// 24-05-30 (목)
/*
  1. 각도기
*/
function solution(angle) {
  if (0 < angle && angle < 90) return 1;
  if (angle === 90) return 2;
  if (90 < angle && angle < 180) return 3;
  if (angle === 180) return 4;
}


// 24-05-30 (목)
/*
  2. 양꼬치
*/
function solution(n, k) {
  return (n*12000 + ((k - parseInt(n*0.1))*2000));
}


// 24-05-30 (목)
/*
  3. 중앙값 구하기
*/
function solution(array) {
  let newArr = array.sort((a, b) => a-b);
  let answer = 0;
  
  for (let i = 0; i < newArr.length; i++) {
    let le = parseInt(newArr.length / 2); 
    if (i > le - 1) {
      answer += newArr[i];
      break;
    }
  }
  
  return answer;
}