// 모듈 추출
var http = require('http');

// server 객체 생성
var server = http.createServer();

// server 객체에 이벤트 연결
server.on('request')