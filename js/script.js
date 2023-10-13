const left = document.getElementById('left');
const best = document.getElementById('best');
const count = document.getElementById('count');
const input = document.getElementById('input');

//랜덤한 3자리 숫자 생성 , 3자리 숫자는 100*a + 10*b + c 의 형태로 구성
function createRandomNumber(){
    let a = Math.floor(Math.random()*10);
    let b = Math.floor(Math.random()*10);
    let c = Math.floor(Math.random()*10);
};

createRandomNumber();

// 엔터키 입력 시 이벤트 설정
window.addEventListener('keydown',e => {
    if (e.key === "Enter"){
        console.log(a);
        console.log(b);
        console.log(c);
    }
});