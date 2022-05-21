// const set = new Set([1, 2, 3]);

// set.forEach((v, v2, set) => console.log(v, v2, set));
// /*
// 1 1 Set(3) {1, 2, 3}
// 2 2 Set(3) {1, 2, 3}
// 3 3 Set(3) {1, 2, 3}
// */


const set = new Set([1, 2, 3]);

// Set 객체는 Set.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다.
console.log(Symbol.iterator in set); // true

console.log(set)
// // 이터러블인 Set 객체는 for...of 문으로 순회할 수 있다.
for (const value of set) {
  console.log(value); // 1 2 3
}

const testArray = [1, 2, 3];
const copytestArray = [...testArray];
const test = [...set];
console.log('test', test, typeof test, test.length);
console.log('copytestArray', copytestArray, typeof copytestArray, copytestArray.length);
// 이터러블인 Set 객체는 스프레드 문법의 대상이 될 수 있다.
//test[test.length] = 100;
test[3] = 100;
copytestArray[3] = 100;
console.log('test', test, typeof test, test.length);
console.log('copytestArray', copytestArray, typeof copytestArray, copytestArray.length);


// console.log([...set]); // [1, 2, 3]
// // 이터러블인 Set 객체는 배열 디스트럭처링 할당의 대상이 될 수 있다.
// const [a, ...rest] = [...set];
// console.log(a, rest); // 1, [2, 3]

// this가 subset의 상위 집합인지 확인한다.
Set.prototype.isSuperset = function (subset) {
  for (const value of subset) {
    // superset의 모든 요소가 subset의 모든 요소를 포함하는지 확인
    if (!this.has(value)) return false;
  }

  return true;
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

// setA가 setB의 상위 집합인지 확인한다.
console.log(setA.isSuperset(setB)); // true
// setB가 setA의 상위 집합인지 확인한다.
console.log(setB.isSuperset(setA)); // false