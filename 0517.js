// const target = 'Is this all there is?';

// // 'is' 문자열과 매치하는 패턴. 플래그가 생략되었으므로 대소문자를 구별한다.
// const regExp = /is/;

// // target과 정규 표현식이 매치하는지 테스트한다.
// regExp.test(target); // -> true

// // target과 정규 표현식의 매칭 결과를 구한다.
// target.match(regExp);
// // -> ["is", index: 5, input: "Is this all there is?", groups: undefined]


// const target = 'Is this all there is?';

// // 'is' 문자열과 매치하는 패턴. 플래그 i를 추가하면 대소문자를 구별하지 않는다.
// const regExp = /is/i;

// target.match(regExp);
// // -> ["Is", index: 0, input: "Is this all there is?", groups: undefined]


// const target = 'Is this all there is?';

// // 임의의 3자리 문자열을 대소문자를 구별하여 전역 검색한다.
// const regExp = /.../g;

// // target.match(regExp); // -> ["Is ", "thi", "s a", "ll ", "the", "re ", "is?"]

// const target = 'Is this all there is?';

// // 임의의 3자리 문자열을 대소문자를 구별하여 전역 검색한다.
// const regExp = /.../g;

// target.match(regExp); // -> ["Is ", "thi", "s a", "ll ", "the", "re ", "is?"]

