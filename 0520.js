// // 스프레드 프로퍼티
// // 객체 복사(얕은 복사)
// const obj = { x: 1, y: 2 };
// const copy = { ...obj };
// console.log(copy); // { x: 1, y: 2 }
// console.log(obj === copy); // false


// // // 객체 병합
// // const merged = { x: 1, y: 2, ...{ a: 3, b: 4 } };
// // console.log(merged); // { x: 1, y: 2, a: 3, b: 4 }

// const arr = [1, 2, 3];

// // ES6 배열 디스트럭처링 할당
// // 변수 one, two, three를 선언하고 배열 arr을 디스트럭처링하여 할당한다.
// // 이때 할당 기준은 배열의 인덱스다.
// const [one, two, three] = arr;

// console.log(one, two, three); // 1 2 3

// const [a, b] = [1, 2];
// console.log(a, b); // 1 2

// const [c, d] = [1];
// console.log(c, d); // 1 undefined

// const [e, f] = [1, 2, 3];
// console.log(e, f); // 1 2

// const [g, , h] = [1, 2, 3];
// console.log(g, h); // 1 3
// // 기본값
// const [a, b, c = 3] = [1, 2];
// console.log(a, b, c); // 1 2 3

// // 기본값보다 할당된 값이 우선한다.
// const [e, f = 10, g = 3] = [1, 2];
// console.log(e, f, g); // 1 2 3

// // Rest 요소
// const [x, ...y] = [1, 2, 3];
// console.log(x, y); // 1 [ 2, 3 ]

// const user = { firstName: 'Ungmo', lastName: 'Lee' };

// // ES6 객체 디스트럭처링 할당
// // 변수 lastName, firstName을 선언하고 user 객체를 디스트럭처링하여 할당한다.
// // 이때 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다. 순서는 의미가 없다.
// const { lastName, firstName } = user;

// console.log(firstName, lastName); // Ungmo Lee


// const str = 'Hello';
// // String 래퍼 객체로부터 length 프로퍼티만 추출한다.
// const { length } = str;
// console.log(length); // 5

// const todo = { id: 1, content: 'HTML', completed: true };
// // todo 객체로부터 id 프로퍼티만 추출한다.
// const { id } = todo;
// console.log(id); // 1

// const todos = [
//   { id: 1, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: false },
//   { id: 3, content: 'JS', completed: false }
// ];

// // todos 배열의 두 번째 요소인 객체로부터 id 프로퍼티만 추출한다.
// const [, { id }] = todos;
// console.log(id); // 2