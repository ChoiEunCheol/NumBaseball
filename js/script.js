const left = document.getElementById('left');
const best = document.getElementById('best');
const count = document.getElementById('count');
const input = document.getElementById('input');

//랜덤한 3자리 숫자 생성 , 3자리 숫자는 100*a + 10*b + c 의 형태로 구성

// 엔터키 입력 시 이벤트 설정
window.addEventListener('keydown',e => {
    if (e.key === "Enter"){
        let a = Math.random()
        console.log(a);
    }
})