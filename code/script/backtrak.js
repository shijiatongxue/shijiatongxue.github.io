function solution(str){
  let map = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz']
  ]);
  let arr = [...(new Set(str.split('')))];
  if (arr.indexOf('1') !== -1) {
    arr.splice(arr.indexOf('1'), 1)
  } 
  // console.log(arr);
  let res = [];
  let list = [];
  backtrack(0);
  function backtrack(i){
    if (list.length === arr.length) {
      res.push(list.slice()); // 这里是复制，不能写成res.push(list);
    } else {
      let index = arr[i];
      let now = map.get(index);
      // console.log(i, now);
      for (let j = 0; j < now.length; j++) {
        list.push(now[j]);
        backtrack(i+1);
        list.pop();
      }
    }
  }
  return res;
}
let s = '132';
console.log(solution(s));