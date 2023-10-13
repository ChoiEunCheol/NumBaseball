const left = document.getElementById("left");
const best = document.getElementById("best");
const count = document.getElementById("count");
const input = document.getElementById("input");

//랜덤한 3자리 숫자 생성 , 3자리 숫자는 100*a + 10*b + c 의 형태로 구성
let RandomNum = 0;
let arrayRandomNum = [];

function makeRandomNum() {
  let a = Math.floor(Math.random() * 9 + 1);
  let b = 0;
  let c = 0;
  while (true) {
    b = Math.floor(Math.random() * 10);
    if (a !== b) {
      break;
    }
  }
  while (true) {
    c = Math.floor(Math.random() * 10);
    if (a !== c && b !== c) {
      break;
    }
  }

    arrayRandomNum[0] = a;
    arrayRandomNum[1] = b;
    arrayRandomNum[2] = c;


  RandomNum = 100 * a + 10 * b + c;
}

makeRandomNum();

// 입력값과 랜덤 숫자 비교 로직 생성
function compareNum() {}

// 엔터키 입력 시 이벤트 설정
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    // input으로 입력받은 숫자를 3개의 숫자로 쪼개는 로직 -> 나누기를 이용할 예정, 키 입력 내부에 있어야 됨
    let inputA = Math.floor(input.value / 100);
    let inputB = Math.floor(input.value.slice(1) / 10);
    let inputC = Number(input.value.slice(2));
    let arrayInputValue = [inputA, inputB, inputC];
    
    console.log(arrayRandomNum.indexOf(1));
  }
  if (e.key === "q"){
    makeRandomNum();
    console.log(RandomNum);
  }
});
