// const arr = [1, 2, 3, 4];
// console.log(arr.length)
// // 원본 배열의 인덱스 1부터 2개의 요소를 제거한다.
// const result = arr.splice(1, 1, 20,30);

// // 원본 배열이 변경된다.
// console.log(arr); // [1, 4]
// // 제거한 요소가 배열로 반환된다.
// console.log(result); // [2, 3]

// console.log(result.length)


// const arr = [1, 2, 3, 4, 5];

// // 배열의 끝에서부터 요소를 한 개 복사하여 반환한다.
// console.log(arr.slice(-1)); // -> [3]

// // 배열의 끝에서부터 요소를 두 개 복사하여 반환한다.
// console.log(arr.slice(-2)); // -> [2, 3]

const todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];

const test = 'test';
console.log(typeof test);
console.log(typeof todos);
// // 얕은 복사(shallow copy)
// const _todos = todos.slice();
// // const _todos = [...todos];

// // _todos와 todos는 참조값이 다른 별개의 객체다.
// console.log(_todos === todos); // false

// // 배열 요소의 참조값이 같다. 즉, 얕은 복사되었다.
// console.log(_todos[0] === todos[0]); // true