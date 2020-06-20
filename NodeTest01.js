// 모듈 추출
var http = require('http');

// Web 서버를 생성 및 실행
http.createServer(function (require, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Hello Node.js World</h1>');
}).listen(52273, function () {
    console.log('Server running at http:/127.0.0.1:52273');
});