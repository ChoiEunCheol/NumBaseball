// 내장모듈
const http = require('http');

// 타입 설정
const contextType = {
    'Content-Type': 'text/html; charset=utf-8'
};

// 서버 생성
const server = http.createServer((request,response)=>{
    response.writeHead(200, contextType);
    response.end("ㅇㅇ");
})

server.listen(8080);