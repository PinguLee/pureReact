// this : 현재 실행 중인 함수의 컨텍스트(실행되고 있는 환경)를 가리키는 것


/* 전역에서 */
console.log(this); // 전역 객체 (예: window)


/* 함수 내에서 */
// 일반 함수
function func() {
  console.log(this);
}
func(); // 전역 객체 (브라우저에서는 window)

// 메서드
const obj = {
  met: function() {
    console.log(this);
  }
};
obh.met(); // myObject

//화살표 함수
const arrow = () => {
  console.log(this);
};
arrow(); // 전역 객체 (브라우저에서는 window)


/* 이벤트 핸들러에서 */
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  console.log(this); // btn
});

/* 생성자 함수 내에서 */
function Test(name) {
  this.name = name;
}
const test = new Test('이민구');
console.log(person1.name); // 이민구