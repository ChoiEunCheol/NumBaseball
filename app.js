// 내장모듈
const http = require('http');
const fs = require('fs');

// 타입 설정
const contextType = {
    'Content-Type': 'text/html; charset=utf-8'
};

function read(x) {
    fs.readFileSync(x,contextType)
}

// 서버 생성
const server = http.createServer((request,response)=>{
    if(request.method === 'GET' && request.url === '/'){
        response.writeHead(200, contextType);
        response.end(read('./index.html'));
    } 
    else if(request.method === 'GET' && request.url === '/js/script.js'){
        response.writeHead(200, contextType);
        response.end(read('./js/script.js'));
    }
    else if(request.method === 'GET' && request.url === '/style/style.css'){
        response.writeHead(200, contextType);
        response.end(read('./style/style.css'));
    }
    else{
        response.writeHead(404, contextType);
        response.end("주소 확인!");
    }
})

server.listen(8080);