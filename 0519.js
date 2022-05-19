// // Symbol 함수를 호출하여 유일무이한 심벌 값을 생성한다.
// const mySymbol = Symbol();
// console.log(typeof mySymbol); // symbol

// // 심벌 값은 외부로 노출되지 않아 확인할 수 없다.
// console.log(mySymbol);        // Symbol()


// const myString = String();
// console.log(typeof myString);

// const myNewString = new String();
// console.log(typeof myNewString);


// const mySymbol = Symbol('ss');

// // 심벌도 레퍼 객체를 생성한다
// console.log(mySymbol.description); // mySymbol
// console.log(mySymbol.toString());  // Symbol(mySymbol)


// const array = [1, 2, 3];

// // 배열은 Array.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다.
// console.log(Symbol.iterator in array); // true

// // 이터러블인 배열은 for...of 문으로 순회 가능하다.
// for (const item of array) {
//   console.log(item);
// }

// // 이터러블인 배열은 스프레드 문법의 대상으로 사용할 수 있다.
// console.log([...array]); // [1, 2, 3]

// // 이터러블인 배열은 배열 디스트럭처링 할당의 대상으로 사용할 수 있다.
// const [a, ...rest] = array;
// console.log(a, rest); // 1, [2, 3]




// // 배열은 이터러블 프로토콜을 준수한 이터러블이다.
// const array = [1, 2, 3];

// // Symbol.iterator 메서드는 이터레이터를 반환한다.
// const iterator = array[Symbol.iterator]();

// // Symbol.iterator 메서드가 반환한 이터레이터는 next 메서드를 갖는다.
// console.log('next' in iterator); // true

// console.log(iterator); // true

// console.log(array[Symbol.iterator])


// // 무한 이터러블을 생성하는 함수
// const fibonacciFunc = function () {
//   let [pre, cur] = [0, 1];

//   return {
//     [Symbol.iterator]() { return this; },
//     next() {
//       [pre, cur] = [cur, pre + cur];
//       // 무한을 구현해야 하므로 done 프로퍼티를 생략한다.
//       return { value: cur };
//     }
//   };
// };

// // fibonacciFunc 함수는 무한 이터러블을 생성한다.
// for (const num of fibonacciFunc()) {
//   if (num > 10000) break;
//   console.log(num); // 1 2 3 5 8...4181 6765
// }

// // 배열 디스트럭처링 할당을 통해 무한 이터러블에서 3개의 요소만 취득한다.
// const [f1] = fibonacciFunc();
// // console.log(f1, f2, f3); // 1 2 3
// console.log(typeof f1);


// // ...[1, 2, 3]은 [1, 2, 3]을 개별 요소로 분리한다(→ 1, 2, 3)
// console.log(...[1, 2, 3]); // 1 2 3

// // 문자열은 이터러블이다.
// console.log(...'Hello'); // H e l l o

// // Map과 Set은 이터러블이다.
// console.log(...new Map([['a', '1'], ['b', '2']])); // [ 'a', '1' ] [ 'b', '2' ]
// console.log(...new Set([1, 2, 3])); // 1 2 3

// // 이터러블이 아닌 일반 객체는 스프레드 문법의 대상이 될 수 없다.
// console.log(...{ a: 1, b: 2 });
// // TypeError: Found non-callable @@iterator

// // 스프레드 문법의 결과는 값이 아니다.
// const list = ...[1, 2, 3]; // SyntaxError: Unexpected token ...


// const arr = [1, 2, 3];

// // 배열 arr의 요소 중에서 최대값을 구하기 위해 Math.max를 사용한다.
// const max = Math.max(arr); // -> NaN


// const arr = [1, 2, 3];

// // 스프레드 문법을 사용하여 배열 arr을 1, 2, 3으로 펼쳐서 Math.max에 전달한다.
// // Math.max(...[1, 2, 3])은 Math.max(1, 2, 3)과 같다.
// const max = Math.max(...arr); // -> 3


// Rest 파라미터는 인수들의 목록을 배열로 전달받는다.
function foo(...rest) {
  console.log(rest); // 1, 2, 3 -> [ 1, 2, 3 ]
}

// 스프레드 문법은 배열과 같은 이터러블을 펼쳐서 개별적인 값들의 목록을 만든다.
// [1, 2, 3] -> 1, 2, 3
foo(...[1, 2, 3]);


