// 모듈 추가
var http = require('http');

// 웹 서버 생성 및 실행
http.createServer(function (request, response) {
    // Location 속성을 이용한 페이지 강제 이동 실행
    response.wrileHead(302, { 'Location': 'https://www.naver.com/' } );
    response.end();
}).listen(52272, function() {
    console.log('Server Running at http://127.0.0.1:52272')
});