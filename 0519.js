// // Symbol 함수를 호출하여 유일무이한 심벌 값을 생성한다.
// const mySymbol = Symbol();
// console.log(typeof mySymbol); // symbol

// // 심벌 값은 외부로 노출되지 않아 확인할 수 없다.
// console.log(mySymbol);        // Symbol()


// const myString = String();
// console.log(typeof myString);

// const myNewString = new String();
// console.log(typeof myNewString);


const mySymbol = Symbol('ss');

// 심벌도 레퍼 객체를 생성한다
console.log(mySymbol.description); // mySymbol
console.log(mySymbol.toString());  // Symbol(mySymbol)