// git

// const strObj = new String();
// console.log(strObj); // String {length: 0, [[PrimitiveValue]]: ""}


// const strObj = new String('Lee');
// console.log(strObj);
// // String {0: "L", 1: "e", 2: "e", length: 3, [[PrimitiveValue]]: "Lee"}


// console.log(strObj[0]); // L


// // 문자열은 원시값이므로 변경할 수 없다. 이때 에러가 발생하지 않는다.
// strObj[0] = 'S';
// console.log(strObj); // 'Lee'


// // 숫자 타입 => 문자열 타입
// String(1);        // -> "1"
// String(NaN);      // -> "NaN"
// String(Infinity); // -> "Infinity"

// // 불리언 타입 => 문자열 타입
// String(true);  // -> "true"
// String(false); // -> "false"


// 'Hello'.length;    // -> 5
// '안녕하세요!'.length; // -> 6


// const strObj = new String('Lee');

// console.log(Object.getOwnPropertyDescriptors(strObj));
// /* String 래퍼 객체는 읽기 전용 객체다. 즉, writable 프로퍼티 어트리뷰트 값이 false다.
// {
//   '0': { value: 'L', writable: false, enumerable: true, configurable: false },
//   '1': { value: 'e', writable: false, enumerable: true, configurable: false },
//   '2': { value: 'e', writable: false, enumerable: true, configurable: false },
//   length: { value: 3, writable: false, enumerable: false, configurable: false }
// }
// */

// const strObj = new String('test');
// console.log(strObj);
// const strObj = new String('Lee');
// console.log(strObj);
// // String {0: "L", 1: "e", 2: "e", length: 3, [[PrimitiveValue]]: "Lee"}


// const str = 'Hello World';

// // 문자열 str에서 'l'을 검색하여 첫 번째 인덱스를 반환한다.
// str.indexOf('l'); // -> 2


// // 문자열 str에서 'or'을 검색하여 첫 번째 인덱스를 반환한다.
// str.indexOf('or'); // -> 7

// // 문자열 str에서 'x'를 검색하여 첫 번째 인덱스를 반환한다. 검색에 실패하면 -1을 반환한다.
// str.indexOf('x'); // -> -1

// // 문자열 str의 인덱스 3부터 'l'을 검색하여 첫 번째 인덱스를 반환한다.
// str.indexOf('l', 3); // -> 3



// const str = 'Hello world';

// // 문자열 str이 'He'로 시작하는지 확인
// str.startsWith('He'); // -> true
// // 문자열 str이 'x'로 시작하는지 확인
// str.startsWith('x'); // -> false

// const str = 'Hello';

// for (let i = 0; i < str.length; i++) {
//   console.log(str.charAt(i)); // H e l l o
// }

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]); // H e l l o
// }


// const str = 'Hello World';

// // 인덱스 1부터 인덱스 4 이전까지의 부분 문자열을 반환한다.
// str.substring(1, 4); // -> ell


// const str = 'Hello World'; // str.length == 11

// // 첫 번째 인수 > 두 번째 인수인 경우 두 인수는 교환된다.
// str.substring(4, 1); // -> 'ell'

// // 인수 < 0 또는 NaN인 경우 0으로 취급된다.
// str.substring(-2); // -> 'Hello World'

// // 인수 > 문자열의 길이(str.length)인 경우 인수는 문자열의 길이(str.length)으로 취급된다.
// str.substring(1, 100); // -> 'ello World'
// str.substring(20); // -> ''

// const str = 'Hello world';

// // str에서 첫 번째 인수 'world'를 검색하여 두 번째 인수 'Lee'로 치환한다.
// str.replace('world', 'Lee'); // -> 'Hello Lee'

// const str = 'Hello world';

// // 특수한 교체 패턴을 사용할 수 있다. ($& => 검색된 문자열)
// str.replace('world', '<strong>$&</strong>');